// pages/login.js
export default function Login() {
    return (
      <div className="flex h-screen">
        <div className="w-1/2 bg-gray-100 flex items-center justify-center">
          <img src="/login-image.png" alt="Login" className="max-w-md" />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center p-10">
          <h1 className="text-2xl font-semibold mb-6">Welcome 👋</h1>
          <input
            type="email"
            placeholder="Email Address"
            className="border p-2 mb-4 w-full rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-2 mb-4 w-full rounded"
          />
          <button className="bg-black text-white py-2 px-4 rounded w-full">Login</button>
        </div>
      </div>
    );
  }