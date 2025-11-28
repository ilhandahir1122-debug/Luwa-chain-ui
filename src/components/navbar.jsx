import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{padding:20, background:"#111", color:"#fff"}}>
      <h2>Luwa Chain</h2>
      <div style={{display:"flex", gap:20}}>
        <Link to="/">Explorer</Link>
        <Link to="/blocks">Blocks</Link>
        <Link to="/txs">Transactions</Link>
        <Link to="/accounts">Accounts</Link>
        <Link to="/wallet">Wallet</Link>
      </div>
    </nav>
  );
}
