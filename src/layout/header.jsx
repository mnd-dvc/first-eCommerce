import "./header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="logo">PAUL SAWYER</div>

      <div
        className="myNavBar"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <NavLink
          className="navlink-button"
          to="/"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              textDecoration: "none",
            };
          }}
        >
          Anasayfa
        </NavLink>
        <NavLink
          className="navlink-button"
          to="/products"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              textDecoration: "none",
            };
          }}
        >
          Ürünler
        </NavLink>

        <NavLink
          className="navlink-button"
          to="/about"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              textDecoration: "none",
            };
          }}
        >
          Hakkımızda
        </NavLink>

        <NavLink
          className="navlink-button"
          to="/contact"
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isPending ? "red" : "black",
              textDecoration: "none",
            };
          }}
        >
          Contact
        </NavLink>
      </div>

      <div className="search-box ">
        <input id="searchInput" type="text" placeholder="Arama Yapın!" />

        <button type="submit">Ara</button>
      </div>
    </header>
  );
}

export default Header;
