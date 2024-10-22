import { Link } from "react-router-dom";
import Container from "../container/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";


function Navbar() {
  const {cartQty , handleLogOut , isLogin} = useShoppingCartContext()
  return (
    <div className="h-12 border-b shadow flex items-center transition-all duration-1000">
      <Container>
        <div className="flex justify-between  mx-4">
          <ul className="flex items-center justify-center">
            <li className="mr-4 py-2 text-[var(--dark-green-blue)] hover:text-[var(--mediume-green-blue)]  transition-all duration-200">
              <Link to="/" className="font-bold tracking-wider">
                Home
              </Link>
            </li>
            <li className="mr-4 py-2 text-[var(--dark-green-blue)] hover:text-[var(--mediume-green-blue)]  transition-all duration-200">
              <Link to="/store" className="font-bold tracking-wider">
                Store
              </Link>
            </li>
            <li>{isLogin ? <Button onClick={handleLogOut} variant="danger" className=" !tracking-wider !w-20 !px-0 !py-2 hover:!bg-red-600 !transition-all !duration-200 ">Log out</Button> : ""}</li>
          </ul>
          <Link to={"/cart"}>
            <div className="flex flex-row-reverse pt-1">
              <button className="pt-1 pl-1 text-[var(--dark-green-blue)] hover:text-red-700 transition-all duration-200">
                <FontAwesomeIcon icon={faCartShopping} /> Cart
              </button>
              <div className=" font-bold text-xs bg-[var(--red-danger)] text-[var(--light-green)] w-7 h-7 rounded-full flex items-center justify-center">{cartQty <= 99 ? cartQty : "+99"  }</div>
            </div>
            
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
