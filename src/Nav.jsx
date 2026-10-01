import { useState } from "react";
import "./Nav.css";

export default function Nav({ isHeroVisible }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Portfolio", "About", "Contact"];

  return (
    <nav className="nav">
      <span className="nav-logo">
        {isHeroVisible ? "" : "Aanya Mittra"}
      </span>

      <ul className="nav-links">
        {links.map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`} className="nav-link">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="nav-burger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`burger-line ${menuOpen ? "top-open" : ""}`}></span>

        <span
          className="burger-line"
          style={{ opacity: menuOpen ? 0 : 1 }}
        ></span>

        <span className={`burger-line ${menuOpen ? "bottom-open" : ""}`}></span>
      </button>

      {menuOpen && (
        <ul className="mobile-menu">
          {links.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}