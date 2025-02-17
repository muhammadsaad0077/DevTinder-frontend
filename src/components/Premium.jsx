
const Premium = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {/* Silver Package */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Silver Package</h2>
          <p className="text-gray-600 mb-4">Perfect for getting started with premium features.</p>
          <ul className="text-left text-gray-600 mb-6">
            <li className="mb-2">✔️ Basic Support</li>
            <li className="mb-2">✔️ Access to standard features</li>
            <li className="mb-2">✔️ Monthly updates</li>
          </ul>
          <div className="text-3xl font-bold text-gray-800 mb-4">$9.99/month</div>
          <button className="w-full bg-blue-600 text-white mt-7 py-2 rounded-xl hover:bg-blue-700 transition duration-300">Choose Silver</button>
        </div>

        {/* Gold Package */}
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Gold Package</h2>
          <p className="text-gray-600 mb-4">For those who want the full premium experience.</p>
          <ul className="text-left text-gray-600 mb-6">
            <li className="mb-2">✔️ Priority Support</li>
            <li className="mb-2">✔️ Access to all features</li>
            <li className="mb-2">✔️ Exclusive content</li>
            <li className="mb-2">✔️ Monthly updates</li>
          </ul>
          <div className="text-3xl font-bold text-gray-800 mb-4">$19.99/month</div>
          <button className="w-full bg-yellow-500 text-white py-2 rounded-xl hover:bg-yellow-600 transition duration-300">Choose Gold</button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
