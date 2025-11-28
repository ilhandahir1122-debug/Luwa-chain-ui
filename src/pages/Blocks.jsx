import { useEffect, useState } from "react";
import { RPC_URL } from "../config";

export default function Blocks() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    async function load() {
      const res = await fetch(RPC_URL, {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({
          jsonrpc:"2.0",
          method:"eth_blockNumber",
          params:[],
          id:1
        })
      });

      const data = await res.json();
      const latest = parseInt(data.result, 16);

      let arr = [];
      for (let i = latest; i > latest - 10; i--) {
        arr.push(i);
      }
      setBlocks(arr);
    }
    load();
  }, []);

  return (
    <div style={{padding:20}}>
      <h2>Recent Blocks</h2>

      {blocks.map(b => (
        <p key={b}>Block #{b}</p>
      ))}
    </div>
  );
}
