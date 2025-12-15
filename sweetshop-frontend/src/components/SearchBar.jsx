export default function SearchBar({ searchText, onSearchChange }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Search items"
        value={searchText}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          padding: "10px",
          width: "260px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.4)",
          backdropFilter: "blur(12px)",
        }}
      />
    </div>
  );
}
