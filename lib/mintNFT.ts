import {
  createUmi,
  generateSigner,
  percentAmount,
  keypairIdentity,
} from "@metaplex-foundation/umi";

import {
  mplTokenMetadata,
  createNft,
} from "@metaplex-foundation/mpl-token-metadata";

import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";

import { clusterApiUrl } from "@solana/web3.js";

export async function mintMerchantNft(wallet: any) {
  try {
    const umi = createUmi(clusterApiUrl("devnet"));

    umi.use(mplTokenMetadata());

    umi.use(walletAdapterIdentity(wallet));

    const mint = generateSigner(umi);

    const result = await createNft(umi, {
      mint,
      name: "StreetFi Angels - Léo do Picolé",
      symbol: "STFI",
      uri: "https://raw.githubusercontent.com/danmotafs/streetfi-angels-mvp/main/public/metadata/leo.json",
      sellerFeeBasisPoints: percentAmount(5),
    }).sendAndConfirm(umi);

    return {
      success: true,
      signature: result.signature,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error,
    };
  }
}