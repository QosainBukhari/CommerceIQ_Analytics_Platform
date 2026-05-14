import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {

    return (

        <div className="min-h-screen bg-gray-100 flex flex-col">

            <Navbar />

            <main className="flex-grow p-8">

                {children}

            </main>

            <Footer />

        </div>

    );
}

export default Layout;