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
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/traffic-light"
                className=" nav-link ms-3 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                Traffic light
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
                to="/color-box"
                className=" flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group nav-link ms-3"
              >
                Color Box
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
          </ul>
        </div>
      </aside>
    </>
  );
}

export default SideBar;
