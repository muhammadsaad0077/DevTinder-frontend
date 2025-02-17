
const PaymentSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white p-6">
      <div className="bg-white text-gray-800 rounded-lg shadow-lg max-w-sm w-full p-8 space-y-6 fade-in">
        <div className="text-center">
          <h1 className="text-4xl font-semibold mb-4 text-green-500">Payment Successful!</h1>
          <p className="text-lg">Thank you for your payment. Your transaction was successful!</p>
        </div>

        <div className="text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 mx-auto text-green-500 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4l3 3" />
          </svg>
        </div>

        <div className="text-center">
          <a href="/" className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition ease-in-out duration-300">
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
