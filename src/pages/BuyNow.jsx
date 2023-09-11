import { useState } from "react";

function BuyNow() {
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonIndex) => {
    if (selectedButtons.includes(buttonIndex)) {
      setSelectedButtons(
        selectedButtons.filter((index) => index !== buttonIndex)
      );
    } else {
      setSelectedButtons([...selectedButtons, buttonIndex]);
    }
  };
  return (
    <div className="min-h-screen bg-base-200 pt-16">
      <div>
        <h1 className="text-5xl font-bold text-center">Choose numbers</h1>
        <div className="max-w-xl m-auto my-10">
          <div className="grid grid-cols-10 max-sm:grid-cols-5 gap-5 px-5">
            {[...Array(100)].map((x, i) => (
              <button
                key={i}
                className={`btn btn-circle btn-outline ${
                  selectedButtons.includes(i)
                    ? "bg-red-500 text-white border-red-500"
                    : ""
                }`}
                onClick={() => handleButtonClick(i)}
              >
                <p>{i + 1}</p>
              </button>
            ))}
          </div>
          <div className="join grid grid-cols-2 my-6">
            <button className="join-item btn btn-outline">Previous</button>
            <button className="join-item btn btn-outline">Next</button>
          </div>
          <div className="flex justify-center my-6">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
