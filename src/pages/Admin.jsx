import axios from "axios";
import { useEffect, useState } from "react";
import ViewModal from "../components/ViewModal";

function Admin() {
  const [loaRequests, setLoaRequests] = useState([]);

  const columns = [
    { name: "ID Number" },
    { name: "Hospital Name" },
    { name: "Complaint Type" },
    { name: "Company Name" },
    { name: "Member Name" },
    { name: "Email" },
    { name: "Landline" },
    { name: "Mobile Number" },
  ];

  const fetchAllRequests = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/loa_request")
      .then((response) => {
        setLoaRequests(response.data.data);
      });
  };

  useEffect(() => {
    fetchAllRequests();
  }, []);

  useEffect(() => {}, [loaRequests]);

  console.log(loaRequests);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="w-4/5 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="relative">
              {columns.map((column, index) => (
                <th key={index} scope="col" className="px-6 py-3">
                  <div className="flex items-center justify-center">
                    {column.name}
                    <a href="#">
                      <svg
                        className="w-3 h-3 ms-1.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                      </svg>
                    </a>
                  </div>
                </th>
              ))}
              <th scope="col" className="px-6 py-3 whitespace-nowrap">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {loaRequests.map((request, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                >
                  {request.id_number}
                </td>
                <td className="px-6 py-4 text-center">
                  {request.hospital_name}
                </td>
                <td className="px-6 py-4 text-center">{request.complaint}</td>
                <td className="px-6 py-4 text-center">
                  {request.company_name}
                </td>
                <td className="px-6 py-4 text-center">{request.member_name}</td>
                <td className="px-6 py-4 text-center">{request.email}</td>
                <td className="px-6 py-4 text-center">{request.landline}</td>
                <td className="px-6 py-4 text-center">
                  {request.mobile_number}
                </td>
                <td className="px-6 py-4 text-center">
                  <a
                    href="#"
                    type="button"
                    data-modal-show="editUserModal"
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View Modal */}
      <ViewModal />
    </main>
  );
}

export default Admin;
