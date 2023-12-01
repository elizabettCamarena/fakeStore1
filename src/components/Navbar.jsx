import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-Pink p-4 w-full flex justify-center">
      <div className="container flex justify-between items-center text-pink px-4">
        <h1 className="text-xl">FakeStore</h1>
        <Link to="/cart">Carrito</Link>
      </div>
    </nav>
  );
};

export default Navbar;