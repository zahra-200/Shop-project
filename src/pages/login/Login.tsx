import { ChangeEvent, useId, useState } from "react";
import Button from "../../components/button/Button";
import { useShoppingCartContext } from "../../context/ShoppingCartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareInstagram } from "@fortawesome/free-brands-svg-icons/faSquareInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";

import { Link } from "react-router-dom";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons/faSquareFacebook";

function Login() {
  const id = useId();
  const { handleLogin } = useShoppingCartContext();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div className="mx-auto w-[300px] bg-[var(--light-green)] p-6 rounded-lg mt-36">
      <form
        className="flex flex-col gap-1 text-[var(--mediume-green-blue)] "
      >
        <label
          className="font-extrabold text-lg tracking-wider "
          htmlFor={`username${id}`}
        >
          Username
        </label>
        <input
          className="px-3 tracking-wide text-[var(--dark-green-blue)] text-lg font-medium mb-4  h-9 rounded bg-[var(--gray)]"
          id={`username${id}`}
          type="text"
          onChange={handleChange}
          name="username"
          value={user.username}
        />

        <label
          className="font-extrabold text-lg tracking-wider "
          htmlFor={`password${id}`}
        >
          Password
        </label>
        <input
          className="px-3 tracking-wide text-[var(--dark-green-blue)] text-lg font-medium mb-4 h-9 rounded bg-[var(--gray)]"
          id={`password${id}`}
          type="password"
          onChange={handleChange}
          name="password"
          value={user.password}
        />

        <Button
          className="!w-full hover:!font-bold hover:!bg-[var(--mediume-green-blue)] hover:!text-[var(--dark-green-blue)]"
          variant="secondary"
          onClick={()=>handleLogin(user.username , user.password)}
        >
          Login
        </Button>
      </form>
      <div className="flex justify-center gap-3 mt-5 items-center ">
        <Link
          className=" transition-all duration-200 hover:scale-90   text-[var(--mediume-green-blue)] text-2xl hover:text-[var(--dark-green-blue)] cursor-pointer"
          target="_blank"
          to={"https://www.instagram.com/"}
        >
          <FontAwesomeIcon icon={faSquareInstagram} />
        </Link>
        <Link
          className=" transition-all duration-200 hover:scale-90  text-[var(--mediume-green-blue)] text-2xl hover:text-[var(--dark-green-blue)] cursor-pointer"
          target="_blank"
          to={"https://www.linkedin.com/"}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </Link>
        <Link
          className=" transition-all duration-200 hover:scale-90  text-[var(--mediume-green-blue)] text-2xl hover:text-[var(--dark-green-blue)] cursor-pointer "
          target="_blank"
          to={
            "https://en-gb.facebook.com/login/?next=https%3A%2F%2Fen-gb.facebook.com%2F"
          }
        >
          <FontAwesomeIcon icon={faSquareFacebook} />
        </Link>
      </div>
    </div>
  );
}

export default Login;
