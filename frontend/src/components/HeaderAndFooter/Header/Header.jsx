import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <Link to="/categories">Categories</Link>
        <Link to="/items">Items</Link>
      </nav>
    </header>
  );
}
