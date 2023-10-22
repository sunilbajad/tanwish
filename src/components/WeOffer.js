import React from "react";
import {
  FaChalkboardTeacher,
  FaCertificate,
  FaBookReader,
} from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";

export default function WeOffer() {
  return (
    <div id="courses" className="bg-[#089553]">
      <div className="max-w-[1240px] md:py-[60px] py-5 mx-auto">
        <h1 className="text-3xl text-center text-white">We Offer</h1>
      </div>
      <div className="max-w-[1200px] text-center mx-auto py-[70px] grid md:grid-cols-4 gap-6">
        <div className="shadow-lg p-4 mx-2 bg-white py-8 rounded-lg hover:scale-105 duration-[400ms] hover:bg-gradient-to-b from-purple-200 to-pink-300">
          <h3 className="text-xl mx-[47%] my-3">
            <GrCertificate />
          </h3>
          <p>Certificate courses</p>
        </div>
        <div className="shadow-lg p-4 mx-2 bg-white py-8 rounded-lg hover:scale-105 duration-[400ms] hover:bg-gradient-to-b from-purple-200 to-pink-300">
          <h3 className="text-xl mx-[47%] my-3">
            <FaCertificate />
          </h3>
          <p>Diploma courses </p>
        </div>
        <div className="shadow-lg p-4 mx-2 bg-white py-8 rounded-lg hover:scale-105 duration-[400ms] hover:bg-gradient-to-b from-purple-200 to-pink-300">
          <h3 className="text-xl mx-[47%] my-3">
            <FaBookReader />
          </h3>
          <p>Fellowship courses</p>
        </div>
        <div className="shadow-lg p-4 mx-2 bg-white py-8 rounded-lg hover:scale-105 duration-[400ms] hover:bg-gradient-to-b from-purple-200 to-pink-300">
          <h3 className="text-xl mx-[47%] my-3">
            <FaChalkboardTeacher />
          </h3>
          <p>Internship </p>
        </div>
      </div>
    </div>
  );
}
