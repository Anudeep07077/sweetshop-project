export default function SweetCard({ sweet, onAdd }) {
  return (
    <div className="sweet-card">
      <h3>{sweet.name}</h3>
      <p>{sweet.category}</p>
      <p>₹ {sweet.price}</p>
      <p>Available: {sweet.quantity}</p>

      <button
        disabled={sweet.quantity === 0}
        onClick={onAdd}
      >
        {sweet.quantity === 0 ? "Out of Stock" : "Add to Cart"}
      </button>
    </div>
  );
}
