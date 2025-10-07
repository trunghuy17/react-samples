import { Link } from "react-router-dom";

function SideBar() {
  return (
    <>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
          <Link to="/" className="flex items-center  ps-2.5 mb-5">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
              className="h-6 me-3 sm:h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              REACT
            </span>
          </Link>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/contact-form"
                className=" nav-link ms-3 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                Contact Form
              </Link>
            </li>
            <li>
              <Link
                to="/tabs"
                className=" nav-link ms-3 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                Tabs
              </Link>
            </li>

            <li>
              <Link
                to="/accordion"
                className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group nav-link ms-3"
              >
                Accordion
              </Link>
            </li>
            <li>
              <Link
                to="/color-box"
                className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group nav-link ms-3"
              >
                Color Box
              </Link>
            </li>
            <li>
              <Link
                to="/job-board"
                className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group nav-link ms-3"
              >
                Job Board
              </Link>
            </li>
            <li>
              <Link
                to="/traffic-light"
                className=" nav-link ms-3 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                Traffic light
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
