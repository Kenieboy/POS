import React from "react";

function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-600 mb-2">
          Authentication
        </h1>

        <p className="text-center text-gray-500 mb-8">{title}</p>

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
