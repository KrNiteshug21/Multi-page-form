import { useState } from "react";

export default function Add_on({
  yearlyPlan,
  setSelectedStep,
  selectedAddOn,
  setSelectedAddOn,
}) {
  const addOnList = [
    {
      id: 0,
      title: "Online games",
      desc: "Access to multiplayer games",
      monthlyAddOn: 1,
      checked: false,
    },
    {
      id: 1,
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      monthlyAddOn: 2,
      checked: false,
    },
    {
      id: 2,
      title: "Customizable profile",
      desc: "Custom theme on your profile",
      monthlyAddOn: 2,
      checked: false,
    },
  ];

  const handleCheckboxClick = (addon) => {
    const foundObject = selectedAddOn.find((obj) => obj.title === addon.title);
    if (!foundObject) return;
    const newAddon = { ...foundObject, checked: !checked };
    setSelectedAddOn({ ...selectedAddOn, newAddon });
  };

  return (
    <div className="flex flex-col justify-center gap-4">
      <div>
        <h2 className="text-marine-blue text-4xl font-bold">Pick add-ons</h2>
        <p className="text-pastel-blue text-base font-medium">
          Add-ons help enhance your gaming experience.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {addOnList.map((addon) => {
          const found = selectedAddOn?.find((obj) => obj.title === addon.title);
          return (
            <div
              key={addon.id}
              className="flex items-center justify-between p-4 border-2 rounded-md"
              style={{
                borderColor: found
                  ? "hsl(213, 96%, 18%)"
                  : "hsl(228, 100%, 84%)",
              }}
              onClick={() => setSelectedAddOn({ ...selectedAddOn, addon })}
            >
              <div className="flex items-center gap-8">
                <input
                  className="w-8 h-8"
                  type="checkbox"
                  name="online"
                  id="online"
                  onClick={() => handleCheckboxClick(addon)}
                />
                <div>
                  <h3 className="text-marine-blue font-semibold tracking-wide text-xl">
                    {addon.title}
                  </h3>
                  <p className="text-cool-gray font-semibold">{addon.desc}</p>
                </div>
              </div>
              <div>
                <p className="text-purplish-blue text-lg">
                  $
                  {yearlyPlan
                    ? `${addon.monthlyAddOn * 10}/yr`
                    : `${addon.monthlyAddOn}/mo`}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between mt-8">
        <button
          onClick={() => setSelectedStep((prev) => prev - 1)}
          className="text-cool-gray font-semibold tracking-wide  absolute bottom-0 left-0"
        >
          Go Back
        </button>
        <button
          onClick={() => setSelectedStep((prev) => prev + 1)}
          className="bg-marine-blue text-white/90 px-4 py-2 rounded-md font-semibold tracking-wide  absolute bottom-0 right-0"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
