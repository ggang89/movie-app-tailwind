import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  
  return (
    <>
      <div>
        <h1 className=" bg-black text-red-700 text-3xl font-bold p-2">
          📽 MOVIES
          <Link to="/">
            <span className="text-slate-300 text-lg p-3  hover:text-yellow-300">
              HOME
            </span>
          </Link>
          <Link to="/latest">
            <span className="text-slate-300 text-lg p-3 pl-0 hover:text-yellow-300">
              최신순
            </span>
          </Link>
          <Link to="/rate">
            <span className="text-slate-300 text-lg p-3 pl-0  hover:text-yellow-300">
              평점순
            </span>
          </Link>
        </h1>
      </div>
      <Outlet/>
    </>
  );
}