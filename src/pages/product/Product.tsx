import { useParams } from "react-router-dom";
import Button from "../../components/button/Button";
import Container from "../../components/container/Container";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/api";
import { products } from "../../types/server";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

function Product() {
  const [singleProduct, setSingleProduct] = useState<products>();
  const params = useParams<{ id: string }>();
  const {
    handleRemoveProductQty,
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    getProductQty,
  } = useShoppingCartContext();
  useEffect(() => {
    getProduct(params.id as string).then((result) => {
      setSingleProduct(result);
    });
  }, []);

  return (
    <div className="rounded-md lg:rounded-none sm:w-1/2 sm:m-auto lg:w-full">
      <Container>
        <div className="my-7 mx-4 grid grid-rows-2 lg:grid-rows-none lg:grid-cols-12 shadow border text-[var(--dark-green-blue)]  ">
          <div className="row-span-2  lg:col-span-2 bg-[var(--light-green)] flex flex-col  items-center relative lg:static">
            <img
              src={singleProduct?.image}
              alt=""
              className="w-full rounded-t-md lg:rounded-none"
            />
            {getProductQty(parseInt(params.id as string)) === 0 ? (
              <div className="!w-1/2 lg:!w-2/3 flex justify-center items-center my-4 hover:-translate-y-1 transition-all  duration-300">
                <Button
                  className=""
                  variant="success"
                  onClick={() =>
                    handleIncreaseProductQty(parseInt(params.id as string))
                  }
                >
                  Add to Cart
                </Button>
              </div>
            ) : (
              <div className="flex w-full lg:flex-col lg:justify-center lg:items-center  my-4">
                <div className=" !w-1/2 lg:!w-2/3 flex border rounded-md border-gray-400 lg:mr-0 lg:mb-2 mr-3">
                  <Button
                    className="!text-lg !font-extrabold !py-1"
                    variant="warning"
                    onClick={() =>
                      handleIncreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    +
                  </Button>
                  <span className="p-3 text-center text-lg font-medium text-[var(--dark-green-blue)]">
                    {getProductQty(parseInt(params.id as string))}
                  </span>
                  <Button
                    className="!text-lg !font-extrabold !py-1"
                    variant="warning"
                    onClick={() =>
                      handleDecreaseProductQty(parseInt(params.id as string))
                    }
                  >
                    -
                  </Button>
                </div>
                <Button
                  className=" !w-1/2 lg:!w-2/3 hover:!bg-red-700 transition-all duration-100"
                  variant="danger"
                  onClick={() =>
                    handleRemoveProductQty(parseInt(params.id as string))
                  }
                >
                  Remove
                </Button>
              </div>
            )}
          </div>

          <div className="grid  p-5 row-span-1 lg:p-0 lg:col-span-10 lg:ml-4 lg:mt-5 lg:row-span-2 ">
            <p className="text-[var(--mediume-green-blue)] font-bold text-lg tracking-wider">
              {singleProduct?.name}
            </p>
            <p className="leading-7 lg:w-[90%] text-justify">
              <span className="font-bold text-[var(--dark-green-blue)]">
                Description :
              </span>
              <br />
              {singleProduct?.description}
            </p>
            <p className="text-[var(--mediume-green-blue)] font-bold ">
              <span className="font-extrabold text-[var(--dark-green-blue)]">
                price :
              </span>
              ${singleProduct?.price}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Product;
