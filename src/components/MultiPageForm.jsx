"use client";
import { useState } from "react";
import Info from "./Info";
import Plan from "./Plan";
import Add_on from "./Add_on";
import Summary from "./Summary";
import Nav from "./Nav";

export default function MultiPageForm() {
  const [selectedStep, setSelectedStep] = useState(1);
  const [yearlyPlan, setYearlyPlan] = useState(false);
  const [selectedAddOn, setSelectedAddOn] = useState([
    {
      id: 0,
      title: "Online games",
      desc: "Access to multiplayer games",
      monthlyAddOn: 1,
      checked: true,
    },
    {
      id: 1,
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      monthlyAddOn: 2,
      checked: true,
    },
  ]);
  const [selectedPlan, setSelectedPlan] = useState("");

  return (
    <section className="max-w-screen-lg mx-auto font-ubuntu bg-magnolia flex items-center gap-4 rounded-lg p-4">
      <Nav selectedStep={selectedStep} setSelectedStep={setSelectedStep} />

      <div className="w-[60%] h-[500px] mx-auto relative">
        {selectedStep === 1 && (
          <Info selectedStep={selectedStep} setSelectedStep={setSelectedStep} />
        )}
        {selectedStep === 2 && (
          <Plan
            yearlyPlan={yearlyPlan}
            setYearlyPlan={setYearlyPlan}
            setSelectedStep={setSelectedStep}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        )}
        {selectedStep === 3 && (
          <Add_on
            yearlyPlan={yearlyPlan}
            setSelectedStep={setSelectedStep}
            selectedAddOn={selectedAddOn}
            setSelectedAddOn={setSelectedAddOn}
          />
        )}
        {selectedStep === 4 && (
          <Summary
            selectedStep={selectedStep}
            setSelectedStep={setSelectedStep}
            yearlyPlan={yearlyPlan}
            selectedAddOn={selectedAddOn}
            selectedPlan={selectedPlan}
          />
        )}
      </div>
    </section>
  );
}
