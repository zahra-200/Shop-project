import { products } from "../../types/server";

type TProductItem = products;

function ProductItem({image , price ,name ,category ,description }: TProductItem) {
  return (
    <div className=" w-[300px] mb-6 h-[400px] flex flex-col shadow border rounded pb-3 text-[var(--dark-green-blue)] hover:-translate-y-2 hover:shadow-lg transition-all duration-300 ">
      <div className="h-[70%] overflow-hidden">
        <img className="rounded-t w-full " src={image} alt="" />
      </div>
      <div className="h-[30%]">
        <div className="flex justify-between my-2 px-2 text-[var(--mediume-green-blue)] font-extrabold">
          <h2 className="line-clamp-1">{name}</h2>
          <h2>{price}$</h2>
        </div>
        <div className="line-clamp-2 px-2 font-medium ">
          <p>{description}</p>
        </div>
        <h2 className="px-2 mt-3">Category : {category}</h2>
      </div>
    </div>
  );
}

export default ProductItem;
