import { useEffect, useState } from "react";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";
import Button from "../button/Button";
import { getProduct } from "../../services/api";
import { products } from "../../types/server";
import { Link } from "react-router-dom";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const {
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    handleRemoveProductQty,
  } = useShoppingCartContext();

  const [SingleProduct, setSingleProduct] = useState<products>();
  useEffect(() => {
    getProduct(id).then((result) => {
      setSingleProduct(result);
    });
  }, []);

  
  return (
    <div>
      <div className="flex flex-col lg:flex-row my-4 border-b pb-4 border-slate-300">
        <Link to={`/product/${id}`}>
          <img className="rounded lg:w-48 " src={SingleProduct?.image} alt="" />
        </Link>
        <div className="w-full mt-3 grid gap-2 lg:w-1/2 lg:mt-0 lg:ml-6 lg:flex lg:flex-col lg:justify-between text-[var(--dark-green-blue)]">
          <h1 className="font-bold lg:font-medium">{SingleProduct?.name}</h1>
          <h4 className="font-bold lg:font-medium">
            Price :
            <span className="font-extrabold lg:font-bold text-[var(--mediume-green-blue)]">
              ${SingleProduct?.price}
            </span>
          </h4>
          <div className="flex ">
            <div className="w-1/2 sm:w-1/3 lg:w-1/2 xl:w-1/3 flex border rounded-md border-gray-400 mr-3">
              <Button
                className="!text-lg !font-extrabold !py-1"
                variant="warning"
                onClick={() => handleIncreaseProductQty(id)}
              >
                +
              </Button>
              <span className="p-3 text-center text-lg font-medium text-[var(--dark-green-blue)]">
                {qty}
              </span>
              <Button
                className="!text-lg !font-extrabold !py-1"
                variant="warning"
                onClick={() => handleDecreaseProductQty(id)}
              >
                -
              </Button>
            </div>
            <Button
              className="!w-1/2 sm:!w-24 hover:!bg-red-700 transition-all duration-100"
              variant="danger"
              onClick={() => handleRemoveProductQty(id)}
            >
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
