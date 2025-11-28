export default function Card({ title, children }) {
  return (
    <div style={{
      padding:20,
      marginTop:20,
      border:"1px solid #ddd",
      borderRadius:8,
      maxWidth:600
    }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
