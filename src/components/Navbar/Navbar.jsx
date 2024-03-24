const Navbar = () => {
  return (
    <nav className="mx-8 lg:mx-28 my-4 lg:my-8">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl lg:text-3xl">Recipe Calories</a>
        </div>
        <div className="navbar-center hidden lg:flex flex-1 text-gray-500">
          <ul className="flex gap-8">
            <li>Home</li>
            <li>Recipes</li>
            <li>About</li>
            <li>Search</li>
          </ul>
        </div>
        <div className="flex-none gap-2">
          <div className="hidden lg:block form-control">
            <label className="input flex items-center gap-2 rounded-full bg-[#150B2B0D]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
              <input type="text" className="grow" placeholder="Search" />
            </label>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>Home</li>
              <li>Recipes</li>
              <li>About</li>
              <li>Search</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
