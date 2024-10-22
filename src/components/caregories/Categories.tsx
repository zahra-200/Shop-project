import { categories} from "../../types/server";

type TCategories = categories;
function Categories({image , name}:TCategories) {
  return (
    <div className="my-7 w-[280px] h-[330px] text-[var(--dark-green-blue)] gap-2 flex flex-col justify-between pb-7">
        <img src={image} alt="" />
        <h1 className="font-bold text-lg ">{name}</h1>
    </div>
  )
}

export default Categories