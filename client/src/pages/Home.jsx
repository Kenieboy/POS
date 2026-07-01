import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-blue-500">
      {/* Navbar */}
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
        <h1 className="text-3xl font-bold text-white">POS System</h1>

        <div className="space-x-3">
          <Link
            to="/login"
            className="px-5 py-2 text-white border border-white rounded-lg hover:bg-white hover:text-indigo-600 transition"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="px-5 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between py-20">
        {/* Left */}
        <div className="text-white max-w-xl">
          <h2 className="text-5xl font-bold leading-tight">
            Smart Point of Sale
            <br />
            for Modern Businesses
          </h2>

          <p className="mt-6 text-lg text-indigo-100">
            Manage sales, products, inventory, customers, and reports in one
            powerful application.
          </p>

          <div className="mt-8 flex gap-4">
            <Link
              to="/login"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100"
            >
              Get Started
            </Link>

            <Link
              to="/register"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-indigo-600"
            >
              Create Account
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="mt-16 md:mt-0">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-96">
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              Dashboard Preview
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between bg-gray-100 p-4 rounded-lg">
                <span>Today's Sales</span>
                <span className="font-bold text-green-600">$2,540</span>
              </div>

              <div className="flex justify-between bg-gray-100 p-4 rounded-lg">
                <span>Orders</span>
                <span className="font-bold">126</span>
              </div>

              <div className="flex justify-between bg-gray-100 p-4 rounded-lg">
                <span>Products</span>
                <span className="font-bold">487</span>
              </div>

              <div className="flex justify-between bg-gray-100 p-4 rounded-lg">
                <span>Customers</span>
                <span className="font-bold">1,248</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="shadow-lg rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">🛒</div>
              <h3 className="text-xl font-bold mb-3">Sales Management</h3>
              <p className="text-gray-600">
                Process sales quickly with an intuitive checkout system.
              </p>
            </div>

            <div className="shadow-lg rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-bold mb-3">Inventory Tracking</h3>
              <p className="text-gray-600">
                Monitor stock levels and receive alerts for low inventory.
              </p>
            </div>

            <div className="shadow-lg rounded-xl p-8 text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-3">Reports & Analytics</h3>
              <p className="text-gray-600">
                View daily, weekly, and monthly sales reports with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        © {new Date().getFullYear()} POS System. All rights reserved.
      </footer>
    </div>
  );
}

export default Home;
