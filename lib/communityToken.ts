import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { generateSigner, percentAmount, publicKey, transactionBuilder, type Umi } from '@metaplex-foundation/umi';
import { createAndMint, mplTokenMetadata, TokenStandard } from '@metaplex-foundation/mpl-token-metadata';
import { AuthorityType, setAuthority } from '@metaplex-foundation/mpl-toolbox';

export const FOUNDER_WALLET = '7EPg2cQBZXebAgiQDbkCNiyS9Jq7W63khhvHsT1iyGDC';
export const TOKEN_NAME = 'StreetFi Angels';
export const TOKEN_SYMBOL = 'ANGELS';
export const TOKEN_URI = 'https://streetfi-angels-mvp.vercel.app/metadata/angels.json';
export const TOKEN_DECIMALS = 6;
export type TokenNetwork = 'devnet' | 'mainnet-beta';

export function tokenUmi(endpoint: string) {
  return createUmi(endpoint, { commitment: 'confirmed' }).use(mplTokenMetadata());
}
export function tokenAmount(supply: string): bigint {
  if (!/^[1-9]\d{0,12}$/.test(supply)) throw new Error('Use a positive whole-number supply (maximum 13 digits).');
  const amount = BigInt(supply) * BigInt(10 ** TOKEN_DECIMALS);
  if (amount > BigInt('18446744073709551615')) throw new Error('Supply exceeds the SPL token limit.');
  return amount;
}
export function buildCommunityToken(umi: Umi, supply: string, fixedSupply: boolean) {
  const amount = tokenAmount(supply);
  if (umi.identity.publicKey !== publicKey(FOUNDER_WALLET)) throw new Error('Connect the founder wallet to create this project token.');
  const mint = generateSigner(umi);
  let builder = transactionBuilder().add(createAndMint(umi, {
    mint, name: TOKEN_NAME, symbol: TOKEN_SYMBOL, uri: TOKEN_URI,
    sellerFeeBasisPoints: percentAmount(0), decimals: TOKEN_DECIMALS,
    tokenStandard: TokenStandard.Fungible, amount,
    tokenOwner: umi.identity.publicKey, isMutable: true,
  }));
  // Remove the freeze authority; holders cannot have their balances frozen.
  builder = builder.add(setAuthority(umi, {
    owned: mint.publicKey, owner: umi.identity,
    authorityType: AuthorityType.FreezeAccount, newAuthority: null,
  }));
  if (fixedSupply) builder = builder.add(setAuthority(umi, {
    owned: mint.publicKey, owner: umi.identity,
    authorityType: AuthorityType.MintTokens, newAuthority: null,
  }));
  if (!builder.fitsInOneTransaction(umi)) throw new Error('Creation must fit in one atomic transaction.');
  return { mint, builder };
}
