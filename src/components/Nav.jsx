import bg from "../public/images/bg-sidebar-desktop.svg";
import classNames from "classnames";

const steps = [
  { step: 1, title: "YOUR INFO" },
  { step: 2, title: "SELECT PLAN" },
  { step: 3, title: "ADD-ON" },
  { step: 4, title: "SUMMARY" },
];

export default function Nav({ selectedStep, setSelectedStep }) {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        width: bg.width,
        height: bg.height,
        backgroundRepeat: "no-repeat",
      }}
      className="object-contain object-center "
    >
      {steps.map((step) => {
        return (
          <div key={step.step} className="flex items-center gap-4 p-4">
            <div
              className={classNames(
                `border-2 text-white grid place-content-center w-10 h-10 rounded-full`,
                {
                  "bg-light-blue": selectedStep === step.step,
                }
              )}
              onClick={() => setSelectedStep(step.step)}
            >
              <p
                className={classNames(`cursor-pointer`, {
                  "text-black": selectedStep === step.step,
                })}
              >
                {step.step}
              </p>
            </div>
            <div
              className="cursor-pointer"
              onClick={() => setSelectedStep(step.step)}
            >
              <p className="text-sm text-light-gray">STEP {step.step}</p>
              <h3 className="text-md font-medium text-white">{step.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
