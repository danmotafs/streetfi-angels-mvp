import {
  createUmi,
} from "@metaplex-foundation/umi-bundle-defaults";

import {
  generateSigner,
  percentAmount,
} from "@metaplex-foundation/umi";

import {
  createNft,
  mplTokenMetadata,
} from "@metaplex-foundation/mpl-token-metadata";

import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";

import { clusterApiUrl } from "@solana/web3.js";

export async function mintMerchantNft(wallet: any) {
  try {
    const umi = createUmi(clusterApiUrl("devnet"));

    umi.use(walletAdapterIdentity(wallet));
    umi.use(mplTokenMetadata());

    const mint = generateSigner(umi);

    const tx = await createNft(umi, {
      mint,
      name: "Leo Picole",
      symbol: "LEO",
      uri: "https://raw.githubusercontent.com/danmotafs/streetfi-angels-mvp/main/public/metadata/leo.json",
      sellerFeeBasisPoints: percentAmount(5),
    }).sendAndConfirm(umi);

    return {
      success: true,
      signature: tx.signature,
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      error,
    };
  }
}