export default function CheckoutPage({ cartItems, onBack }) {
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="glass-container">
      <h1>Checkout</h1>

      {/* Order Summary */}
      <h3>Order Summary</h3>
      {cartItems.length === 0 && <p>No items in cart</p>}

      {cartItems.map((item) => (
        <p key={item.id}>
          {item.name} × {item.quantity} = ₹ {item.price * item.quantity}
        </p>
      ))}

      <hr />
      <h3>Total Amount: ₹ {totalAmount}</h3>

      {/* Payment Options */}
      <h3>Payment Method</h3>

      <div style={{ marginBottom: "15px" }}>
        <label>
          <input type="radio" name="payment" defaultChecked /> UPI
        </label>
        <br />
        <label>
          <input type="radio" name="payment" /> Debit / Credit Card
        </label>
        <br />
        <label>
          <input type="radio" name="payment" /> Cash on Delivery
        </label>
      </div>

      {/* Actions */}
      <button style={{ marginBottom: "10px" }}>
        Place Order
      </button>

      <button onClick={onBack}>
        Back to Shop
      </button>
    </div>
  );
}
