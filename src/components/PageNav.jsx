import { Link } from "react-router-dom";

export default function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/pricing"> pricing </Link>
        </li>
        <li>
          <Link to="/product"> product </Link>
        </li>
      </ul>
    </nav>
  );
}
