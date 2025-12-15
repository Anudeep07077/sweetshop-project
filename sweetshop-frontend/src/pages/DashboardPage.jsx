import { useEffect, useState } from "react";
import SweetCard from "../components/SweetCard";

export default function DashboardPage() {
  const [sweets, setSweets] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  // Fetch sweets from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/sweets")
      .then((res) => res.json())
      .then((data) => setSweets(data));
  }, []);

  // Calculate total whenever cart changes
  useEffect(() => {
    const sum = cart.reduce(
      (acc, item) => acc + item.price * item.cartQty,
      0
    );
    setTotal(sum);
  }, [cart]);

  // Add sweet to cart
  function addToCart(sweet) {
    if (sweet.quantity === 0) return;

    setSweets((prev) =>
      prev.map((s) =>
        s.id === sweet.id ? { ...s, quantity: s.quantity - 1 } : s
      )
    );

    setCart((prev) => {
      const existing = prev.find((i) => i.id === sweet.id);
      if (existing) {
        return prev.map((i) =>
          i.id === sweet.id
            ? { ...i, cartQty: i.cartQty + 1 }
            : i
        );
      }
      return [...prev, { ...sweet, cartQty: 1 }];
    });
  }

  // Remove from cart
  function removeFromCart(item) {
    setCart((prev) => prev.filter((i) => i.id !== item.id));
    setSweets((prev) =>
      prev.map((s) =>
        s.id === item.id
          ? { ...s, quantity: s.quantity + item.cartQty }
          : s
      )
    );
  }

  // Checkout
  function handleCheckout() {
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }

    fetch("http://localhost:8080/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalAmount: total }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Order placed successfully!");
        setCart([]);
        setTotal(0);
      })
      .catch(() => alert("Checkout failed"));
  }

  return (
    <div className="dashboard-wrapper">
      <h1>Sweet Shop</h1>

      <div className="sweet-list">
        {sweets.map((sweet) => (
          <SweetCard
            key={sweet.id}
            sweet={sweet}
            onAdd={() => addToCart(sweet)}
          />
        ))}
      </div>

      {/* CART SECTION */}
      <div className="glass-container">
        <h2>🛒 Cart</h2>

        {cart.length === 0 && <p>No items in cart</p>}

        {cart.map((item) => (
          <div key={item.id}>
            {item.name} × {item.cartQty} = ₹
            {item.price * item.cartQty}
            <button onClick={() => removeFromCart(item)}>❌</button>
          </div>
        ))}

        <h3>Total: ₹ {total}</h3>

        <button onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
}
