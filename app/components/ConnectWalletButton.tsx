"use client";

import { useWallet } from "@solana/wallet-adapter-react";

export default function ConnectWalletButton() {
  const {
    connected,
    publicKey,
    connect,
    disconnect,
  } = useWallet();

  async function handleClick() {
    try {
      if (connected) {
        await disconnect();
      } else {
        await connect();
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <button
      onClick={handleClick}
      className="rounded-2xl bg-yellow-400 px-5 py-3 font-black text-black transition hover:scale-105"
    >
      {connected
        ? `${publicKey?.toString().slice(0, 4)}...${publicKey
            ?.toString()
            .slice(-4)}`
        : "Connect Phantom"}
    </button>
  );
}
