import axios from "axios";
import { useEffect, useState } from "react";
import { allBookingRoute } from "../utils/APIRoutes";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export default function AdminUserStatus() {
  const navigation = useNavigate();
  const { userData } = useUser();
  const [usersTableData, setUsersTableData] = useState([]);
  useEffect(() => {
    if (userData && userData.user.role === "user") {
      navigation("/");
    }
    async function getdata() {
      await axios
        .get(allBookingRoute)
        .then((res) => setUsersTableData(res.data));
    }
    getdata();
  }, [navigation, userData]);

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
            {usersTableData.map((data, index) => (
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
