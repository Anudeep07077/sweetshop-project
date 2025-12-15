import { useState } from "react";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export default function App() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <>
      {/* Glass Navigation Container */}
      <div className="glass-nav">
        <button
          className={activePage === "dashboard" ? "nav-btn active" : "nav-btn"}
          onClick={() => setActivePage("dashboard")}
        >
          Dashboard
        </button>

        <button
          className={activePage === "login" ? "nav-btn active" : "nav-btn"}
          onClick={() => setActivePage("login")}
        >
          Login
        </button>

        <button
          className={activePage === "register" ? "nav-btn active" : "nav-btn"}
          onClick={() => setActivePage("register")}
        >
          Register
        </button>
      </div>

      {activePage === "dashboard" && <DashboardPage />}
      {activePage === "login" && <LoginPage />}
      {activePage === "register" && <RegisterPage />}
    </>
  );
}
