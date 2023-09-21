import { useEffect, useState } from "react";
import Modal from "../components/Modal";
import { useUser } from "../hooks/useUser";
import axios from "axios";
import { getAllBookingRoute } from "../utils/APIRoutes";
import { ToastContainer, toast } from "react-toastify";
import PayModal from "../components/PayModal";

function BuyNow() {
  const [selectedButtons, setSelectedButtons] = useState([]);
  const { userData } = useUser();
  const [buynowData, setBuyNowData] = useState([]);
  const [page, setPage] = useState(1);

  const handleButtonClick = (buttonId) => {
    if (selectedButtons.includes(buttonId)) {
      setSelectedButtons(selectedButtons.filter((id) => id !== buttonId));
    } else {
      setSelectedButtons([...selectedButtons, buttonId]);
    }
  };

  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
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

  function handleUserModal() {
    if (selectedButtons.length >= 1) {
      if (userData) {
        document.getElementById("my_modal_2").showModal();
      } else {
        document.getElementById("my_modal_1").showModal();
      }
    } else {
      toast.error("At least select 1 booking", toastOptions);
    }
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
            {buynowData.map((data) => (
              <button
                key={data.BookingNo}
                className={`btn btn-circle btn-outline
                ${
                  data.status === "disabled"
                    ? "btn-disabled text-white"
                    : `${
                        selectedButtons.includes(data.BookingNo)
                          ? "bg-red-500 text-white border-red-500"
                          : ""
                      }`
                }
                `}
                onClick={() => handleButtonClick(data.BookingNo)}
              >
                {buynowData.length >= 1 && <p>{data.BookingNo}</p>}
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
            <button className="btn btn-outline" onClick={handleUserModal}>
              Buy Now
            </button>

            <dialog id="my_modal_1" className="modal">
              <Modal />
            </dialog>

            <dialog id="my_modal_2" className="modal">
              <PayModal selectedButtons={selectedButtons} />
            </dialog>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default BuyNow;
