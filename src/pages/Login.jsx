import React from "react";

function Login() {
  return (
    <div className="p-8 max-w-sm mx-auto">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Login</h1>
      <input
        type="email"
        placeholder="Email"
        className="border p-2 w-full mb-2"
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 w-full mb-4"
      />
      <button
        className="bg-blue-500 text-white w-full py-2 rounded"
        onClick={() => {
          localStorage.setItem("isLoggedIn", true);
          window.location.href = "/";
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
