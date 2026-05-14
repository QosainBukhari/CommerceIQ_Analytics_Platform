import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Categories from "./pages/Categories";
import Geography from "./pages/Geography";
import Orders from "./pages/Orders";
import Payments from "./pages/Payments";
import Products from "./pages/Products";
import Sellers from "./pages/Sellers";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Dashboard */}
                <Route
                    path="/"
                    element={<Dashboard />}
                />

                {/* Products */}
                <Route
                    path="/products"
                    element={<Products />}
                />

                {/* Categories */}
                <Route
                    path="/categories"
                    element={<Categories />}
                />

                {/* Orders */}
                <Route
                    path="/orders"
                    element={<Orders />}
                />

                {/* Payments */}
                <Route
                    path="/payments"
                    element={<Payments />}
                />

                {/* Sellers */}
                <Route
                    path="/sellers"
                    element={<Sellers />}
                />

                {/* Geography */}
                <Route
                    path="/geography"
                    element={<Geography />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default App;