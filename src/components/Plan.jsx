import arcade from "@/public/images/icon-arcade.svg";
import advanced from "@/public/images/icon-advanced.svg";
import pro from "@/public/images/icon-pro.svg";
import Image from "next/image";
import { useState } from "react";

export default function Plan({
  setSelectedStep,
  yearlyPlan,
  setYearlyPlan,
  selectedPlan,
  setSelectedPlan,
}) {
  const plans = [
    { id: 0, title: "arcade", monthlyPlan: 9, icon: arcade },
    { id: 1, title: "advanced", monthlyPlan: 12, icon: advanced },
    { id: 2, title: "pro", monthlyPlan: 15, icon: pro },
  ];

  return (
    <div className="flex flex-col justify-center gap-4">
      <div>
        <h2 className="text-marine-blue text-4xl font-bold">
          Select your plan
        </h2>
        <p className="text-pastel-blue text-base font-medium">
          You have the option of monthly or yearly billing
        </p>
      </div>

      <form action="" className="flex items-center justify-between gap-4">
        {[
          plans.map((plan) => {
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.title)}
                className="p-2 flex-1 border-2 rounded-md cursor-pointer"
                style={{
                  borderColor:
                    selectedPlan === plan.title
                      ? "hsl(213, 96%, 18%)"
                      : "hsl(228, 100%, 84%)",
                }}
              >
                <Image
                  className="mb-8"
                  src={plan.icon.src}
                  width={plan.icon.width}
                  height={plan.icon.height}
                  alt={plan.title}
                />
                <h3 className="text-2xl capitalize font-semibold text-marine-blue">
                  {plan.title}
                </h3>
                <p className="text-cool-gray text-lg">
                  $
                  {yearlyPlan
                    ? `${plan.monthlyPlan * 10}/yr`
                    : `${plan.monthlyPlan}/mo`}
                </p>
                <p className="font-semibold tracking-wide">
                  {yearlyPlan === true ? "2 months free" : null}
                </p>
              </div>
            );
          }),
        ]}
      </form>

      <div
        className="flex items-center justify-center gap-8 p-2 text-xl bg-light-blue rounded-md"
        style={{ marginTop: !yearlyPlan ? "24px" : "" }}
      >
        <p
          className="text-xl font-semibold tracking-wide"
          style={{
            color:
              yearlyPlan === false
                ? "hsl(213, 96%, 18%)"
                : "hsl(231, 11%, 63%)",
          }}
        >
          Monthly
        </p>
        <div
          className="flex items-center px-1 bg-marine-blue w-14 h-6 rounded-3xl overflow-hidden tap cursor-pointer transition ease-in-out duration-500"
          onClick={() => setYearlyPlan(!yearlyPlan)}
          style={{
            justifyContent: yearlyPlan === true ? "flex-end" : "flex-start",
          }}
        >
          <div className="bg-white w-4 h-4 rounded-3xl">{}</div>
        </div>
        <p
          className="text-xl font-semibold tracking-wide"
          style={{
            color:
              yearlyPlan === true ? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)",
          }}
        >
          Yearly
        </p>
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
