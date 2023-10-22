import React from "react";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <div className="max-w-[1240px] my-12 mx-auto text-center">
      <div
        className="max-w-[1200px] mx-auto grid
      md:grid-cols-2 md:text-3xl font-bold gap-3"
      >
        <div className="my-5">
          <h2 className="h2 mb-2 lg:mb-4 text-[#089553]">
            <CountUp start={1} end={3} duration={5} enableScrollSpy />+
          </h2>
          <div className="text-xl text-heading font-bold mb-3">
            years of experience
          </div>
          <p className="text-sm">
            We have over 3 years of Experience yoga is language of art. We love
            to spread it.
          </p>
        </div>
        <div className="my-5">
          <h2 className="h2 mb-2 lg:mb-4 text-[#089553]">
            <CountUp start={1} end={200} duration={2} enableScrollSpy />+
          </h2>
          <div className="text-xl text-heading font-bold mb-3">
            happy trained students
          </div>
          <p className="text-sm">
            Additionally, positive feedback, testimonials, and high course
            completion rates can be an indication of happy and trained students.
          </p>
        </div>
        <div className="my-5">
          <h2 className="h2 mb-2 lg:mb-4 text-[#089553]">
            <CountUp start={1} end={4} duration={5} enableScrollSpy />+
          </h2>
          <div className="text-xl text-heading font-bold mb-3">
            expert trainers
          </div>
          <p className="text-sm">
            Experienced trainers in Ayurveda have a deep understanding of
            Ayurvedic principles and techniques, and they can impart their
            knowledge and skills to students effectively, helping them become
            competent Ayurveda practitioners..
          </p>
        </div>
        <div className="my-5">
          <h2 className="h2 mb-2 lg:mb-4 text-[#089553]">
            <CountUp start={1} end={15} duration={5} enableScrollSpy />+
          </h2>
          <div className="text-xl text-heading font-bold mb-3">
            years of clinical experience
          </div>
          <p className="text-sm">
            Years of clinical experience in Ayurveda provide practitioners with
            a deep understanding of the practical application of Ayurvedic
            principles, allowing them to offer effective treatments and remedies
            to their clients.
          </p>
        </div>
      </div>
      <h3 className="md:text-3xl mx-3 my-10 font-bold text-[#089553]">
        The better way to start learning ayurveda is here! - learn anywhere,
        anytime, explore new ways to learn & practice ayurveda.
      </h3>
    </div>
  );
}
