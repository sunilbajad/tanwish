import React from "react";

export default function Banner() {
  return (
    <div id="home" className="bg-Hero bg-cover w-full py-[100px]">
      <div className="max-w-[1240px] md:my-[80px] mx-auto text-center font-bold ">
        <div className="text-xl text-[#1b6f48] md:text-3xl md:p-[24px]">
          Making ayurveda a way of life of Ayurveda Practice
        </div>
        <p className=" text-d md:text-3xl md:text-[30px] md:p-[24px]">
          Ayurveda is a way of life, but we have to make it possible to follow
          for each of us & our patients too! The courses offered by us will help
          you to sail the journey of your ayurveda practice with core ayurvedic
          concept and confidence too.
        </p>

        <button className="md:w-[20%] m-2 bg-[#fa5b0c] hover:bg-[rgb(237,127,72)] hover:text-black text-white p-3 mt-5 rounded">
          Call Now
        </button>
        <button className="md:w-[20%] m-2 bg-[#089553] hover:bg-[#41d38f] hover:text-black text-white p-3 mt-5 rounded">
          Enquire Now
        </button>
      </div>
    </div>
  );
}
