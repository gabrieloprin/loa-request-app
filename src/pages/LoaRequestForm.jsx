import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
import Toast from "../utils/toast";
import showLoadingPopup from "../utils/showLoadingPopup";
import hospitals from "../json/hospitalsData.json";

function LoaRequestForm() {
  const [formData, setFormData] = useState({
    idNumber: "",
    hospitalName: "",
    complaintType: "",
    companyName: "",
    memberName: "",
    email: "",
    landline: "",
    mobileNumber: "",
  });

  const [hospitalData, setHospitalData] = useState(hospitals);

  const complaintTypes = [
    { name: "Consult", value: "Consult" },
    { name: "Lab Diagnosis", value: "Lab Diagnosis" },
    { name: "In-Patient", value: "In-Patient" },
    { name: "Out-Patient", value: "Out-Patient" },
  ];

  const handleSubmitFormData = async (event) => {
    event.preventDefault();
    showLoadingPopup();
    const headers = {
      Application: "application/json",
    };
    await axios
      .post(
        // "http://127.0.0.1:8000/api/loa_request",
        "https://api.loa.getwellhealthinc.com.ph/loa-request-api/public/api/loa_request",
        formData,
        {
          headers: headers,
        }
      )
      .then(async () => {
        Swal.close();
        setFormData({
          ...formData,
          idNumber: "",
          hospitalName: "",
          complaintType: "",
          companyName: "",
          memberName: "",
          email: "",
          landline: "",
          mobileNumber: "",
        });
        await Toast.fire({
          icon: "success",
          title: "Successfully sent!",
        });
      })
      .catch(async () => {
        Swal.close();
        await Toast.fire({
          icon: "error",
          title: "Something went wrong.",
        });
      });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <form
        className="form-card relative"
        onSubmit={handleSubmitFormData}
        style={{
          width: "50%",
          padding: "2rem 5rem",
          backgroundColor: "#ffffff",
          boxShadow: "0px 0px 5px 2px #888",
        }}
      >
        <div className="absolute top-5 right-8 w-full flex justify-end items-end flex-col space-y-1">
          <img
            src="/images/ic-getwell-square.jpg"
            className="mr-3 h-20 object-cover"
          />
        </div>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              LOA Request Form
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              {/* Kindly provide your information */}
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4 bg-red">
                <label
                  htmlFor="id-number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  ID number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="id-number"
                    value={formData.idNumber}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        idNumber: event.target.value,
                      });
                    }}
                    id="id-number"
                    autoComplete="id-number"
                    className="block w-50 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-getwellGreen-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="hospital-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Hospital
                </label>
                <div className="mt-2">
                  <select
                    type="text"
                    name="hospital-name"
                    value={formData.hospitalName}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        hospitalName: event.target.value,
                      });
                    }}
                    id="hospital-name"
                    autoComplete="hospital-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-getwellGreen-600 sm:text-sm sm:leading-6"
                  >
                    <option></option>
                    {hospitalData.map((hospital, index) => (
                      <option key={index} value={hospital.providername}>
                        {hospital.providername}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="complaint"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Type of LOA Request
                </label>
                <div className="mt-2">
                  <select
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-getwellGreen-600 sm:text-sm sm:leading-6"
                    value={formData.complaintType}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        complaintType: event.target.value,
                      });
                    }}
                  >
                    <option></option>
                    {complaintTypes.map((complaint, index) => (
                      <option key={index} value={complaint.value}>
                        {complaint.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="company-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Company Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="company-name"
                    value={formData.companyName}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        companyName: event.target.value,
                      });
                    }}
                    id="company-name"
                    autoComplete="company-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-getwellGreen-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="member-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name of Member
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="member-name"
                    value={formData.memberName}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        memberName: event.target.value,
                      });
                    }}
                    id="member-name"
                    autoComplete="member-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-getwellGreen-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        email: event.target.value,
                      });
                    }}
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-getwellGreen-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="landline"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Landline
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="landline"
                    value={formData.landline}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        landline: event.target.value,
                      });
                    }}
                    id="landline"
                    autoComplete="landline"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-getwellGreen-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="mobile-number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Mobile No.
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-getwellGreen-600 sm:max-w-md">
                    <span className="flex select-none items-center pl-3 text-gray-500 sm:text-sm">
                      +63
                    </span>
                    <input
                      type="text"
                      name="mobile-number"
                      value={formData.mobileNumber}
                      onChange={(event) => {
                        setFormData({
                          ...formData,
                          mobileNumber: event.target.value,
                        });
                      }}
                      id="mobile-number"
                      autoComplete="mobile-number"
                      className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-getwellGreen-600 text-white w-52 px-3 py-2 font-semibold shadow-sm hover:bg-getwellGreen-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-getwellGreen-600"
          >
            Send
          </button>
        </div>
      </form>
    </main>
  );
}

export default LoaRequestForm;
