import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import ProductItem from "../../components/productItem/ProductItem";
import { getData } from "../../services/api";
import { useEffect, useState } from "react";
import { products } from "../../types/server";

function Store() {
  const [products, setProducts] = useState<products[]>([]);
  useEffect(() => {
    getData().then((result) => {
      setProducts(result);
    });
  }, []);
  return (
    <div>
      <Container>
        <div className="mx-4 my-5">
          <h1 className="my-4 font-extrabold tracking-wide  text-2xl text-[var(--dark-green-blue)] ">
            The latest products
          </h1>
          <div className="grid justify-self-center gap-5 justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3">
            {products.map((item) => (
              <Link key={item.id} to={`/product/${item.id}`}>
                <ProductItem {...item} />
              </Link>
            ))}
            
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Store;
