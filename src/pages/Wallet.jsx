import { useState } from "react";
import { ethers } from "ethers";
import { RPC_URL } from "../config";

export default function Wallet() {
  const [pk, setPk] = useState("");
  const [address, setAddress] = useState("");
  const [balance, setBalance] = useState("");

  async function loadWallet() {
    try {
      const provider = new ethers.JsonRpcProvider(RPC_URL);
      const wallet = new ethers.Wallet(pk, provider);

      setAddress(wallet.address);

      const bal = await provider.getBalance(wallet.address);
      setBalance(ethers.formatEther(bal));
    } catch {
      alert("Invalid private key");
    }
  }

  return (
    <div style={{padding:20}}>
      <h2>Luwa Wallet</h2>

      <input
        style={{padding:10, width:"80%"}}
        placeholder="Enter Private Key"
        value={pk}
        onChange={e => setPk(e.target.value)}
      />

      <button onClick={loadWallet} style={{padding:10, marginLeft:10}}>
        Load
      </button>

      {address && (
        <div>
          <p><b>Address:</b> {address}</p>
          <p><b>Balance:</b> {balance} LUWA</p>
        </div>
      )}
    </div>
  );
}
