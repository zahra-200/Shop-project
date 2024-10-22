import Container from "../../components/container/Container";
import Categories from "../../components/caregories/Categories";
import { useEffect, useState } from "react";
import { getCategoryData } from "../../services/api";
import { categories } from "../../types/server";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons/faAnglesRight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";

function Home() {
  const [categoryItems, setCategoryItems] = useState<categories[]>([]);
  useEffect(() => {
    getCategoryData().then((result) => {
      setCategoryItems(result);
    });
  }, []);
  return (
    <Container>
      <div className="mx-4 mt-6 flex flex-col text-[var(--dark-green-blue)] ">
        <h1 className="font-extrabold tracking-wide  text-2xl">Product Categories</h1>

        <div className=" w-full grid grid-cols-1  ">
          <Link className="justify-self-end" to={"/store"}>
          <Button className="!w-28 !bg-[var(--mediume-green-blue)] !text-[var(--gray)]  hover:translate-x-2 transition-all duration-200">
            View all <FontAwesomeIcon icon={faAnglesRight} />
          </Button>
          </Link>
          <div className=" justify-self-center items-center sm:justify-self-auto sm:justify-items-center grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 ">
            {categoryItems.map((item) => (
              <Categories key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Home;
