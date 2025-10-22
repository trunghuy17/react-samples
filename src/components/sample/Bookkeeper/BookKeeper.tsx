import { NavLink, Outlet, useNavigate } from "react-router-dom";

function BookKeeper() {
  const navigate = useNavigate();

  function gotoHome() {
    navigate("/bookkeeper/home");
  }
  return (
    <div>
      <h1 className="text-5xl font-semibold">Book keeper</h1>
      <br />
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={gotoHome}
      >
        Navigate to home
      </button>
      <ul className="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow-sm sm:flex max-w-screen-md ">
        <li className="w-full focus-within:z-10">
          <NavLink
            to="home"
            className="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
          >
            Home
          </NavLink>
        </li>

        <li className="w-full focus-within:z-10">
          <NavLink
            to="contact"
            className="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Contact
          </NavLink>
        </li>

        <li className="w-full focus-within:z-10">
          <NavLink
            to="invoice"
            className="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            Invoice
          </NavLink>
        </li>
      </ul>
      <br />
      <Outlet/>
    </div>
  );
}

export default BookKeeper;
