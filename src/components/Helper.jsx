import { Link } from "react-router-dom";

export const navItems = (
  <>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <details>
        <summary>Menu</summary>
        <ul className="p-2">
          <li>
            <Link to="/menu">All</Link>
          </li>
          <li>
            <a>Pizza</a>
          </li>
          <li>
            <a>Biryani</a>
          </li>
        </ul>
      </details>
    </li>

    <li>
      <details>
        <summary>Services</summary>
        <ul className="p-2">
          <li>
            <a>Delivery</a>
          </li>
          <li>
            <a>Book Table</a>
          </li>
          <li>
            <a>Order Track</a>
          </li>
        </ul>
      </details>
    </li>

    <li>
      <a>Offers</a>
    </li>
  </>
);
