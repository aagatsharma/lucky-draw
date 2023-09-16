import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { useUser } from "../hooks/useUser";
import axios from "axios";
import { getAllBookingRoute } from "../utils/APIRoutes";

function BuyNow() {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const { userData } = useUser();
  const [buynowData, setBuyNowData] = useState([]);
  const [page, setPage] = useState(1);

  const handleButtonClick = (buttonIndex) => {
    if (selectedButtons.includes(buttonIndex)) {
      setSelectedButtons(
        selectedButtons.filter((index) => index !== buttonIndex)
      );
    } else {
      setSelectedButtons([...selectedButtons, buttonIndex]);
    }
  };

  useEffect(() => {
    async function fetchBuyData() {
      await axios
        .get(`${getAllBookingRoute}&_page=${page}`)
        .then((data) => setBuyNowData(data.data));
    }
    fetchBuyData();
  }, [page]);

  if (buynowData === undefined) {
    return <p>Loading...</p>;
  }
  return (
    <div className="min-h-screen bg-base-200 py-16">
      <div>
        <h1 className="text-5xl font-bold text-center">Choose numbers</h1>
        <div className="max-w-xl m-auto my-10">
          {buynowData.length < 1 && (
            <p className="text-3xl text-center">No more draw left</p>
          )}
          <div className="grid grid-cols-10 max-sm:grid-cols-5 gap-5 px-5">
            {buynowData.map((booking, index) => (
              <button
                key={index}
                className={`btn btn-circle btn-outline ${
                  selectedButtons.includes(index)
                    ? "bg-red-500 text-white border-red-500"
                    : ""
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {buynowData.length >= 1 && <p>{booking.BookingNo}</p>}
              </button>
            ))}
          </div>
          <div className="join my-6 flex flex-1 justify-center">
            {page > 1 && (
              <button
                className="join-item btn btn-outline "
                onClick={() => setPage(page - 1)}
              >
                «
              </button>
            )}
            <button className="join-item btn btn-outline ">{page}</button>
            {buynowData.length > 1 && (
              <button
                className="join-item btn btn-outline "
                onClick={() => setPage(page + 1)}
              >
                »
              </button>
            )}
          </div>
          <div className="flex justify-center mt-10">
            <a href="#my_modal_8" className="btn btn-outline ">
              Buy Now
            </a>
            {!userData && <Modal />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyNow;
