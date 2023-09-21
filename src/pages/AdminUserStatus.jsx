import axios from "axios";
import { useEffect, useState } from "react";
import { allBookingRoute } from "../utils/APIRoutes";

export default function AdminUserStatus() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    async function getdata() {
      await axios.get(allBookingRoute).then((res) => setUserData(res.data));
    }
    getdata();
  }, []);
  console.log(userData);
  if (userData === undefined) {
    return <p>Loading.....</p>;
  }

  return (
    <div className="min-h-screen pt-10">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Booking Numbers</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {userData.map((data, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{data.name}</td>
                <td className="grid grid-cols-4 md:grid-cols-8">
                  {data.BookingNo.map((booking) => (
                    <span key={booking}>{booking} </span>
                  ))}
                </td>
                <td>{data.contact}</td>
              </tr>
            ))}

            {/* row 2 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}
