import { useState } from "react";
import SweetCard from "./SweetCard";
import SearchBar from "./SearchBar";
import CheckoutPage from "../pages/CheckoutPage";

export default function SweetList() {
  const [searchText, setSearchText] = useState("");
  const [showCheckout, setShowCheckout] = useState(false);

  const [sweets, setSweets] = useState([
    { id: 1, name: "Gulab Jamun", category: "Indian Dessert", price: 20, quantity: 10 },
    { id: 2, name: "Rasgulla", category: "Indian Dessert", price: 15, quantity: 8 },
    { id: 3, name: "Ladoo", category: "Indian Dessert", price: 10, quantity: 25 },
    { id: 4, name: "Peda", category: "Indian Dessert", price: 18, quantity: 12 },
    { id: 5, name: "Malpua", category: "Indian Dessert", price: 22, quantity: 6 },
    { id: 6, name: "Jalebi", category: "Indian Dessert", price: 12, quantity: 30 },
    { id: 7, name: "Imarti", category: "Indian Dessert", price: 20, quantity: 9 },

    { id: 8, name: "Kaju Katli", category: "Dry Fruit Sweet", price: 40, quantity: 8 },
    { id: 9, name: "Badam Halwa", category: "Dry Fruit Sweet", price: 45, quantity: 5 },
    { id: 10, name: "Anjeer Roll", category: "Dry Fruit Sweet", price: 50, quantity: 4 },
    { id: 11, name: "Dry Fruit Ladoo", category: "Dry Fruit Sweet", price: 35, quantity: 10 },

    { id: 12, name: "Milk Cake", category: "Milk Sweet", price: 35, quantity: 6 },
    { id: 13, name: "Kalakand", category: "Milk Sweet", price: 28, quantity: 7 },
    { id: 14, name: "Rabri", category: "Milk Sweet", price: 30, quantity: 9 },
    { id: 15, name: "Basundi", category: "Milk Sweet", price: 32, quantity: 5 },
    { id: 16, name: "Rasmalai", category: "Milk Sweet", price: 45, quantity: 6 },

    { id: 17, name: "Chocolate Barfi", category: "Chocolate", price: 30, quantity: 5 },
    { id: 18, name: "Choco Ladoo", category: "Chocolate", price: 22, quantity: 10 },
    { id: 19, name: "Chocolate Modak", category: "Chocolate", price: 26, quantity: 8 },
    { id: 20, name: "Nut Fudge", category: "Chocolate", price: 38, quantity: 4 },

    { id: 21, name: "Soan Papdi", category: "Festival Sweet", price: 18, quantity: 12 },
    { id: 22, name: "Mysore Pak", category: "Festival Sweet", price: 25, quantity: 6 },
    { id: 23, name: "Motichoor Ladoo", category: "Festival Sweet", price: 20, quantity: 15 },
    { id: 24, name: "Boondi Ladoo", category: "Festival Sweet", price: 18, quantity: 20 },

    { id: 25, name: "Sandesh", category: "Bengali Sweet", price: 20, quantity: 10 },
    { id: 26, name: "Mishti Doi", category: "Bengali Sweet", price: 18, quantity: 7 },
    { id: 27, name: "Cham Cham", category: "Bengali Sweet", price: 16, quantity: 9 },

    { id: 28, name: "Chenna Poda", category: "Regional Sweet", price: 30, quantity: 6 },
    { id: 29, name: "Balushahi", category: "Regional Sweet", price: 22, quantity: 9 },
    { id: 30, name: "Shahi Tukda", category: "Regional Sweet", price: 35, quantity: 5 },

    { id: 31, name: "Rose Rasmalai", category: "Premium Sweet", price: 48, quantity: 6 },
    { id: 32, name: "Pistachio Kulfi", category: "Premium Sweet", price: 55, quantity: 4 },
    { id: 33, name: "Saffron Phirni", category: "Premium Sweet", price: 42, quantity: 3 },
    { id: 34, name: "Almond Payasam", category: "Premium Sweet", price: 38, quantity: 6 },

    { id: 35, name: "Fruit Barfi", category: "Modern Sweet", price: 25, quantity: 12 },
    { id: 36, name: "Coconut Ladoo", category: "Modern Sweet", price: 15, quantity: 20 },
    { id: 37, name: "Dates Roll", category: "Modern Sweet", price: 28, quantity: 8 },
    { id: 38, name: "Oats Ladoo", category: "Modern Sweet", price: 18, quantity: 14 },
    { id: 39, name: "Honey Halwa", category: "Modern Sweet", price: 30, quantity: 6 },
    { id: 40, name: "Jaggery Peda", category: "Modern Sweet", price: 22, quantity: 11 },
  ]);

  // CART STATE
  const [cartItems, setCartItems] = useState([]);

  // SEARCH FILTER
  const filteredSweets = sweets.filter(
    (sweet) =>
      sweet.name.toLowerCase().includes(searchText.toLowerCase()) ||
      sweet.category.toLowerCase().includes(searchText.toLowerCase())
  );

  // ADD TO CART + DECREASE INVENTORY
  function handleAddToCart(sweet) {
    setSweets((prev) =>
      prev.map((item) =>
        item.id === sweet.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );

    setCartItems((prev) => {
      const found = prev.find((item) => item.id === sweet.id);

      if (found) {
        return prev.map((item) =>
          item.id === sweet.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { ...sweet, quantity: 1 }];
    });
  }

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // CHECKOUT VIEW
  if (showCheckout) {
    return (
      <CheckoutPage
        cartItems={cartItems}
        onBack={() => setShowCheckout(false)}
      />
    );
  }

  // MAIN VIEW
  return (
    <>
      <SearchBar searchText={searchText} onSearchChange={setSearchText} />

      <div className="sweet-list">
        {filteredSweets.map((sweet) => (
          <SweetCard
            key={sweet.id}
            sweet={sweet}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <div className="glass-container">
        <h3>Cart</h3>

        {cartItems.length === 0 && <p>No items added</p>}

        {cartItems.map((item) => (
          <p key={item.id}>
            {item.name} × {item.quantity} = ₹ {item.price * item.quantity}
          </p>
        ))}

        <hr />
        <strong>Total Amount: ₹ {totalPrice}</strong>

        {cartItems.length > 0 && (
          <button
            style={{ marginTop: "15px" }}
            onClick={() => setShowCheckout(true)}
          >
            Proceed to Checkout
          </button>
        )}
      </div>
    </>
  );
}
