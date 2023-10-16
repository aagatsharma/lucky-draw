/* eslint-disable react/prop-types */
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import axios from "axios";
import { userBookingRoute } from "../utils/APIRoutes";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

export default function PayModal({ selectedButtons }) {
  const [phoneNumber, setPhoneNumber] = useState();
  const [disableButton, showDisableButton] = useState(false);
  const { userData } = useUser();
  async function handleSubmit(e) {
    e.preventDefault();
    const user = userData.user.username;
    if (!disableButton) {
      const { data } = await axios.post(userBookingRoute, {
        BookingNo: selectedButtons,
        name: user,
        contact: phoneNumber,
      });
      const toastOptions = {
        position: "bottom-right",
        autoClose: 15000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      };

      if (data) {
        toast.success(
          "We'll inform you on whatsapp (+9779766318425) or contact us on 9820238776",
          toastOptions
        );
        showDisableButton(true);
      } else {
        toast.error("Something went wrong", toastOptions);
      }
    }
  }
  const totalItems = selectedButtons.length;
  const totalCost = totalItems * 500;
  return (
    <>
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">
          Enter your phone number and scan QR !
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Phone Number</span>
            </label>
            <input
              type="tel"
              pattern="[9][0-9]{9}"
              placeholder="Enter your phone number"
              className="input input-bordered"
              onChange={(e) => setPhoneNumber(e.target.value)}
              maxLength={10}
              required
            />
          </div>
          <div className="flex justify-center">
            <img src="/qr.png" className=" mt-5 h-60 w-auto" />
          </div>
          <h1 className="mt-5 font-bold">Your selected draws: </h1>
          <div className="grid grid-cols-10">
            {selectedButtons.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          <h1 className="text-center mt-3">Total draws: {totalItems}</h1>
          <h1 className="text-center text-lg font-bold">
            Total cost: Rs. {totalCost}
          </h1>
          <div className="form-control mt-6">
            <button
              className={`btn  ${
                disableButton ? "btn-disable" : "btn-primary"
              }`}
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
