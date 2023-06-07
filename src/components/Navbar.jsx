import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <div className="bg-slate-800 shadow-md">
      <nav className="flex items-center justify-between space-x-9 py-4 w-full max-w-[1200px] mx-auto">
        <span className="text-2xl font-semibold">React Playground</span>
        <ul className="flex space-x-6">
          <li className={`${pathname === "/" && "text-rose-400"}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${pathname === "/products" && "text-rose-400"}`}>
            <Link to="/products">Products</Link>
          </li>
          <li className={`${pathname === "/blogs" && "text-rose-400"}`}>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li className={`${pathname === "/about" && "text-rose-400"}`}>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
