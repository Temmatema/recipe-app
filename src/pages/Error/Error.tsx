import { FC } from "react";
import { Link } from "react-router-dom";

const Error: FC = () => {

  return (
    <div id="error-page" className="pt-28">
      <h1 className="text-7xl text-center font-bold mb-2">404</h1>
      <p className="text-center text-xl mb-5">
        Not found
      </p>
      <Link className="flex mx-auto w-24 border-2 hover:border-black
      transition-colors duration-300 p-2 justify-center" to='/'>Go back</Link>
    </div>
  );
};

export default Error;
