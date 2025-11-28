import { useState, useEffect } from "react";
import { RPC_URL } from "../config";

export default function Explorer() {
  const [block, setBlock] = useState(0);

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
      setBlock(parseInt(data.result, 16));
    }
    load();
  }, []);

  return (
    <div style={{padding:20}}>
      <h1>Luwa Explorer</h1>
      <p><b>Latest Block:</b> {block}</p>
    </div>
  );
}
