// pages/otp.js
export default function OTP() {
    return (
      <div className="flex h-screen">
        <div className="w-1/2 bg-gray-100 flex items-center justify-center">
          <img src="/otp-image.png" alt="OTP" className="max-w-md" />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center p-10">
          <h1 className="text-2xl font-semibold mb-6">Enter OTP</h1>
          <p className="mb-4 text-gray-600">We have sent a code to your registered email.</p>
          <div className="flex space-x-2 mb-6">
            <input type="text" maxLength="1" className="border p-2 w-12 text-center" />
            <input type="text" maxLength="1" className="border p-2 w-12 text-center" />
            <input type="text" maxLength="1" className="border p-2 w-12 text-center" />
            <input type="text" maxLength="1" className="border p-2 w-12 text-center" />
          </div>
          <button className="bg-black text-white py-2 px-4 rounded w-full">Verify</button>
        </div>
      </div>
    );
  }
  