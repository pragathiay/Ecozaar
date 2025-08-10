import React, { useEffect, useState } from "react";

const ExchangeProcess = () => {
  const exchangeSteps = [
    {
      stepId: "01",
      stepTitle: "Pick your plan",
      stepDescription: "Rs.999 onwards",
    },
    {
      stepId: "02",
      stepTitle: "Paperless Process",
      stepDescription: "Skip the negotiations",
    },
    {
      stepId: "03",
      stepTitle: "Retain or Return the EV",
      stepDescription: "Starting from Rs.999",
    },
  ];

  const [activeStepIndex, setActiveStepIndex] = useState(0);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStepIndex((prevIndex) => (prevIndex + 1) % exchangeSteps.length);
    }, 2500);
    return () => clearInterval(stepInterval);
  }, []);

  return (
    <div className="text-center mt-[60px]">
      <img
        src="/assets/SavingLogo.svg"
        alt="EV Exchange Banner"
        className="w-full max-w-[700px] mx-auto block"
      />
      <div className="relative max-w-[400px] w-full mx-auto my-6 bg-white rounded-2xl shadow-md overflow-hidden py-4">
        <div
          className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-r from-[#00c853] to-[#00e676] rounded-b-xl z-10 transition-all duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] scale-y-95 origin-top"
          style={{
            transform: `translateY(${activeStepIndex * 100}%) scaleY(1.1)`,
          }}
        ></div>

        {exchangeSteps.map((step, index) => (
          <div
            key={step.stepId}
            className={`relative z-20 group flex items-start gap-3 px-5 py-3 cursor-pointer transition-all duration-300 ease-in-out rounded-md ${
              activeStepIndex === index
                ? "text-white scale-[1.015]"
                : "hover:bg-gray-50 text-gray-700"
            }`}
            onClick={() => setActiveStepIndex(index)}
          >
            <div
              className={`text-sm font-bold h-8 w-8 flex items-center justify-center rounded-full transition-all duration-300 border ${
                activeStepIndex === index
                  ? "bg-white text-[#00c853] border-white scale-110"
                  : "bg-gray-100 text-gray-700 border-gray-300 group-hover:border-[#00e676]"
              }`}
            >
              {step.stepId}
            </div>

            <div className="text-left">
              <h4
                className={`font-semibold text-sm mb-1 transition-colors ${
                  activeStepIndex === index ? "text-white" : "text-gray-800"
                }`}
              >
                {step.stepTitle}
              </h4>
              <p
                className={`text-xs leading-tight transition-colors duration-300 ${
                  activeStepIndex === index ? "text-white" : "text-gray-600"
                }`}
              >
                {step.stepDescription}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-[10px] text-xs text-[#555] leading-[1.4]">
        *Exchange is applicable only for Bajaj Chetak 2903,
        <br />
        Ather 450X 3.7 kWh & TVS iQube (UG 12) 3.4 kWh
      </div>

      <button className=" mb-5 mt-4 bg-[#eaffea] text-[#1a1a1a] border-2 border-[#00aa53] px-[100px] py-3 rounded-xl font-semibold text-lg cursor-pointer transition-all duration-300 hover:bg-[#d8ffd8]">
        Exchange your old bike
      </button>
    </div>
  );
};

export default ExchangeProcess;
