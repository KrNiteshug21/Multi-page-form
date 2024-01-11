import React from "react";

export default function Info({ selectedStep, setSelectedStep }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-marine-blue text-4xl font-bold">Personal info</h2>
        <p className="text-pastel-blue text-base ">
          Please provide your name, email, address and phone number
        </p>
      </div>
      <form action="" className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <label
            className="text-marine-blue text-md pl-1 font-semibold tracking-wide"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="h-12 px-4 rounded-lg outline-purplish-blue text-marine-blue font-semibold text-lg"
            type="text"
            name="name"
            placeholder="Your Name"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-marine-blue text-md pl-1 font-semibold tracking-wide"
            htmlFor="mail"
          >
            Email Address
          </label>
          <input
            className="h-12 px-4 rounded-lg outline-purplish-blue text-marine-blue font-semibold text-lg"
            type="text"
            name="mail"
            placeholder="Your Email Address"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-marine-blue text-md pl-1 font-semibold tracking-wide"
            htmlFor="phone_no"
          >
            Phone Number
          </label>
          <input
            className="h-12 px-4 rounded-lg outline-purplish-blue text-marine-blue font-semibold text-lg"
            type="text"
            name="phone_no"
            placeholder="eg. +1 234 567 890"
          />
        </div>
        <div className="text-right align-text-bottom mt-4">
          <button
            onClick={() => setSelectedStep((prev) => prev + 1)}
            className="bg-marine-blue text-white/90 px-4 py-2 rounded-md font-semibold tracking-wide  absolute bottom-0 right-0"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
