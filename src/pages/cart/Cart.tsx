import { useEffect, useState } from "react";
import Button from "../../components/button/Button";
import CartItem from "../../components/cartItem/CartItem";
import Container from "../../components/container/Container";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import { products } from "../../types/server";
import { getData } from "../../services/api";
import ConfirmationModal from "../../components/confirm/ConfirmationModal";
interface CartItem {
  id: number;
  qty: number;
}
function Cart() {
  const { cartItems, cartQty, handleRemoveAllproducts } =
    useShoppingCartContext();

  const [Products, setProducts] = useState<products[]>([]);

  useEffect(() => {
    getData().then((result) => {
      setProducts(result);
    });
  }, []);

  const Total = cartItems.reduce((total, cartItem) => {
    const item = Products.find((i) => i.id == cartItem.id);
    return total + (item?.price || 0) * cartItem.qty;
  }, 0);

  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  // Handle the confirm button click
  const handleConfirm = () => {
    setShowConfirm(false);
    alert("Order confirmed!");
  };

  // Handle the cancel button click
  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <Container>
      <div className="mx-4">
        {showConfirm ? (
          <ConfirmationModal
            onCancel={handleCancel}
            onConfirm={handleConfirm}
          />
        ) : (
          ""
        )}
        <div className="grid sm:gap-5 lg:gap-0 sm:grid-cols-2 ">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className="my-4 w-full bg-[var(--light-green)] p-6">
          <div className="text-[var(--dark-green-blue)] font-medium mb-6">
            <h4 className="my-2">
              Total number of products :
              <span className="font-bold text-[var(--mediume-green-blue)]">
                {" "}
                {cartQty}
              </span>
            </h4>
            <h4 className="my-2">
              Products price:
              <span className="font-bold text-[var(--mediume-green-blue)]">
                {" "}
                ${Total}
              </span>
            </h4>
            <h4 className="my-2">
              Discount :
              <span className="font-bold text-[var(--mediume-green-blue)]">
                {" "}
                ${Total == 0 ? 0 : 500}
              </span>
            </h4>
            <h4 className="my-2">
              Total price :
              <span className="font-bold text-[var(--mediume-green-blue)]">
                {" "}
                ${Total > 0 ? Total - 500 : 0}
              </span>
            </h4>
          </div>
          <div className="flex">
            <Button
              className="hover:!bg-[var(--mediume-green-blue)] hover:!text-[var(--dark-green-blue)] transition-all duration-150 shadow !w-28 mr-3 "
              variant="secondary"
              onClick={() => setShowConfirm(true)}
            >
              Confirm
            </Button>
            <Button
              className="hover:!bg-red-600 transition-all duration-150 shadow !w-28 mr-3"
              variant="danger"
              onClick={handleRemoveAllproducts}
            >
              Cancel all
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
