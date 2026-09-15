function Card() {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center w-64 border border-gray-100">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHQxQGpl6sToLkruHFRf_c4BtTAPJJSUXg_TrY5HNCzg&s=10"
        alt="Card image"
        className="w-20 h-20 mb-4 object-contain"
      />

      <h3 className="text-xl font-bold text-gray-800 mb-2">car</h3>

      <button className="mt-2 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-blue-600 hover:text-white transition-colors">
        Learn More
      </button>
    </div>
  );
}

export default Card;
