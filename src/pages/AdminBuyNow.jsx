import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

import axios from "axios";
import { addBookingNumber, getAllBookingRoute } from "../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";

function AdminBuyNow() {
  const navigation = useNavigate();
  const { userData } = useUser();

  const [selectedButtons, setSelectedButtons] = useState([]);
  const [BookingNo, setBookingNo] = useState(null);
  const [error, setError] = useState(false);
  const [buynowData, setBuyNowData] = useState([]);
  const [page, setPage] = useState(1);

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  const handleButtonClick = (buttonId) => {
    if (selectedButtons.includes(buttonId)) {
      setSelectedButtons(selectedButtons.filter((id) => id !== buttonId));
    } else {
      setSelectedButtons([...selectedButtons, buttonId]);
    }
  };

  function handleInputChange(e) {
    const input = e.target.value;
    if (!/^\d+$/.test(input)) {
      setError(true);
    } else {
      setError(false);
      setBookingNo(input);
    }
  }

  async function addBuyNow() {
    if (error) {
      toast.error("Booking should be a number", toastOptions);
    } else {
      const response = await axios.post(addBookingNumber, { BookingNo });
      if (response.data.message) {
        toast.error("Booking number already exists", toastOptions);
      } else {
        toast.success("Booking added successfully", toastOptions);
        const newData = await axios.get(`${getAllBookingRoute}&_page=${page}`);
        setBuyNowData(newData.data);
      }
    }
  }

  useEffect(() => {
    if (userData && userData.user.role === "user") {
      navigation("/");
    }
    async function fetchBuyData() {
      await axios
        .get(`${getAllBookingRoute}&_page=${page}`)
        .then((data) => setBuyNowData(data.data));
    }

    fetchBuyData();
  }, [navigation, userData, page]);

  return (
    <div className="min-h-screen bg-base-200 py-16">
      <div>
        <div className="max-w-xl m-auto my-10">
          <div className="flex justify-center items-center mb-10 gap-5 px-4">
            <input
              type="text"
              placeholder="Add a booking number"
              className="input input-bordered w-full max-w-xs"
              onChange={handleInputChange}
            />
            <button className="btn btn-active" onClick={addBuyNow}>
              Add
            </button>
          </div>
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
          <div className="flex justify-center mt-10 gap-10">
            <a className="btn btn-outline ">Enable</a>
            <a className="btn btn-outline ">Disable</a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AdminBuyNow;
