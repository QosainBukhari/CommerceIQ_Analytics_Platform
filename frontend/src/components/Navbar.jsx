import { NavLink } from "react-router-dom";

function Navbar() {

    const linkClasses = ({ isActive }) =>

        isActive
            ? "text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
            : "text-gray-700 font-medium hover:text-blue-600 transition duration-200";

    return (

        <nav className="bg-white shadow-md px-8 py-4 flex items-center justify-between">

            <h1 className="text-2xl font-bold text-blue-600">
                CommerceIQ
            </h1>

            <div className="flex gap-6 flex-wrap">

                <NavLink to="/" className={linkClasses}>
                    Dashboard
                </NavLink>

                <NavLink to="/products" className={linkClasses}>
                    Products
                </NavLink>

                <NavLink to="/categories" className={linkClasses}>
                    Categories
                </NavLink>

                <NavLink to="/orders" className={linkClasses}>
                    Orders
                </NavLink>

                <NavLink to="/payments" className={linkClasses}>
                    Payments
                </NavLink>

                <NavLink to="/sellers" className={linkClasses}>
                    Sellers
                </NavLink>

                <NavLink to="/geography" className={linkClasses}>
                    Geography
                </NavLink>

            </div>

        </nav>

    );
}

export default Navbar;