export default function Cart({ cartItems }) {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="glass-container" style={{ marginTop: "20px" }}>
      <h3>Cart</h3>

      {cartItems.length === 0 && <p>No items added</p>}

      {cartItems.map((item) => (
        <p key={item.id}>
          {item.name} × {item.quantity} = ₹ {item.price * item.quantity}
        </p>
      ))}

      <hr />

      <h4>Total: ₹ {totalAmount}</h4>
    </div>
  );
}
