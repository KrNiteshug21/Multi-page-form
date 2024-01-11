import React from "react";

export default function Summary({
  selectedStep,
  setSelectedStep,
  yearlyPlan,
  selectedAddOn,
  selectedPlan,
}) {
  return (
    <div className="flex flex-col justify-center gap-4">
      <div>
        <h2 className="text-marine-blue text-4xl font-bold">Finishing up</h2>
        <p className="text-pastel-blue text-base font-medium">
          Double-check everything looks OK before confirming
        </p>
      </div>

      <div>div</div>

      <div className="flex items-center justify-between mt-8">
        <button
          onClick={() => setSelectedStep((prev) => prev - 1)}
          className="text-cool-gray font-semibold tracking-wide  absolute bottom-0 left-0"
        >
          Go Back
        </button>
        <button className="bg-marine-blue text-white/90 px-4 py-2 rounded-md font-semibold tracking-wide  absolute bottom-0 right-0">
          Confirm
        </button>
      </div>
    </div>
  );
}
