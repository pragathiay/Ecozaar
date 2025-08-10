import { useState, useMemo, useEffect } from "react";

const evOptions = [
  {
    name: "ATHER RIZTA Z 2.9kWh",
    baseCost: 130000,
    img: "/assets/bike.png",
  },
  {
    name: "TVS iQube S",
    baseCost: 125000,
    img: "https://www.tvsmotor.com/electric-scooters/tvs-iqube/-/media/Vehicles/Feature/Iqube/Variant/TVS-iQube-O9/Color_Images/Titanium-Grey-Glossy/right.webp",
  },
  {
    name: "OLA S1 Air",
    baseCost: 120000,
    img: "/assets/bike.png",
  },
];

const SavingsComparionTool = () => {
  // States for Savings Calculator
  const [mode, setMode] = useState("EV");
  const [selectedEV, setSelectedEV] = useState(evOptions[0]);
  const [monthlyKm, setMonthlyKm] = useState(1800);

  const { evCost, petrolCost, savings, carbonSaved } = useMemo(() => {
    const evRunningCostPerKm = 0.25;
    const petrolRunningCostPerKm = 2.4;
    const petrolEmissionPerKm = 0.15;
    const totalYears = 5;
    const totalKm = monthlyKm * 12 * totalYears;

    const evCost = selectedEV.baseCost + totalKm * evRunningCostPerKm;
    const petrolCost = totalKm * petrolRunningCostPerKm;
    const savings = Math.max(0, petrolCost - evCost);
    const carbonSaved = Math.max(0, totalKm * petrolEmissionPerKm);

    return { evCost, petrolCost, savings, carbonSaved };
  }, [selectedEV, monthlyKm]);

  // States for EMI Calculator
  const [loanAmount, setLoanAmount] = useState(50000);
  const [interestRate, setInterestRate] = useState(1);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);
  const [totalPayable, setTotalPayable] = useState(0);
  const [interestComponent, setInterestComponent] = useState(0);

  useEffect(() => {
    const r = interestRate / 100 / 12;
    const n = tenure;
    const emiCalc =
      (loanAmount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const total = emiCalc * n;
    const interestAmt = total - loanAmount;

    setEmi(Math.round(emiCalc));
    setTotalPayable(Math.round(total));
    setInterestComponent(Math.round(interestAmt));
  }, [loanAmount, interestRate, tenure]);

  const ModeButton = ({ modeName, label }) => (
    <button
      onClick={() => setMode(modeName)}
      className={`flex-1 py-2 px-4 rounded-lg font-semibold border transition-all duration-200 ${
        mode === modeName
          ? "bg-green-600 text-white border-green-600 shadow-md"
          : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
      }`}
    >
      {label}
    </button>
  );

  const RangeSlider = ({ value, onChange, max }) => (
    <div className="bg-gray-50 rounded-lg p-4">
      <input
        type="range"
        min="0"
        max={max}
        step="10"
        value={value}
        onChange={(e) => onChange(Math.max(0, Number(e.target.value)))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
        style={{
          background: `linear-gradient(to right, #00c853 0%, #00e676 ${
            (value / max) * 100
          }%, #e5e7eb ${(value / max) * 100}%, #e5e7eb 100%)`,
        }}
      />
      <div className="flex justify-between text-gray-600 text-xs mt-2 font-medium">
        <span>0 KM</span>
        <span>{value} KM</span>
        <span>{max} KM</span>
      </div>
    </div>
  );

  return (
    <div className="space-y-12">
      {/* Savings Calculator */}
      <div id="calculator" className="bg-black py-10 px-4">
        <div className="max-w-6xl mx-auto bg-black text-white rounded-2xl p-6 md:p-10 flex flex-col md:flex-row gap-6">
          {/* Left card */}
          <div className="flex-1 min-w-0">
            <h2 className="text-3xl font-bold mb-2 text-white">
              Savings Calculator
            </h2>
            <p className="text-gray-300 text-sm mb-6">
              Discover Your Savings with an Electric Two - Wheeler & Rooftop
              Solar
            </p>

            {/* Mode buttons */}
            <div className="flex gap-3 mb-6">
              <button
                className={`px-6 py-3 rounded-md font-medium ${
                  mode === "EV"
                    ? "bg-green-500 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setMode("EV")}
              >
                EV vs 2W Petrol
              </button>
              <button
                className={`px-6 py-3 rounded-md font-medium ${
                  mode === "Solar"
                    ? "bg-green-500 text-white"
                    : "bg-white text-black"
                }`}
                onClick={() => setMode("Solar")}
              >
                Rooftop Solar
              </button>
            </div>

            {mode === "EV" && (
              <>
                {/* Preferred EV */}
                <div className="mb-6">
                  <label className="text-green-500 font-semibold block mb-2">
                    Preferred EV <span className="text-red-500">*</span>
                  </label>
                  <select
                    value=""
                    className="w-full p-3 rounded-lg bg-gray-100 text-gray-800 pointer-events-none"
                  >
                    <option>Select your DISCOM</option>
                  </select>
                </div>

                {/* Average Monthly Running */}
                <div className="mb-6">
                  <label className="text-green-500 font-semibold block mb-2">
                    Average Monthly Running
                  </label>
                  <div className="bg-white rounded-xl p-4">
                    <RangeSlider
                      value={monthlyKm}
                      onChange={setMonthlyKm}
                      max={3000}
                      min={10}
                      showValue
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Right card */}
          {mode === "EV" && (
            <div className="flex-1 border border-green-200 rounded-xl p-4 flex flex-col justify-between">
              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <img
                    src="assets/scooty.png"
                    alt={selectedEV.name}
                    className="h-8"
                  />
                  <span className="font-semibold">{selectedEV.name}</span>
                </div>
                <h3 className="text-green-500 text-lg font-bold">
                  Great Choice!
                </h3>
                <p className="text-xl font-bold">
                  You will save: ₹{savings.toLocaleString()}
                </p>
                <p className="text-gray-400 text-sm mb-4">
                  Comparing 5-year ownership costs — EV vs petrol, all expenses
                  included
                </p>
                <hr className="border-gray-700 mb-4" />

                <div className="flex justify-around">
                  <div>
                    <p className="text-green-500 text-xl font-bold">
                      ₹{evCost.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-400">EV ownership costs</p>
                  </div>
                  <div className="flex items-center text-gray-400">VS</div>
                  <div>
                    <p className="text-green-100 text-xl font-bold">
                      ₹{petrolCost.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-400">
                      Petrol ownership costs
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-green-100 text-green-800 text-center py-2 mt-4 rounded-b-xl w-full">
                <div className="flex items-center justify-center gap-2">
                  {/* CO₂ Cloud Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    className="w-6 h-6 text-green-600"
                    fill="currentColor"
                  >
                    <path
                      d="M48,24c0-6.627-5.373-12-12-12c-4.348,0-8.126,2.321-10.207,5.803C24.139,17.295,22.112,17,20,17
        c-6.627,0-12,5.373-12,12c0,0.548,0.041,1.084,0.104,1.612C4.147,32.29,0,37.508,0,44c0,8.284,6.716,15,15,15h34
        c8.284,0,15-6.716,15-15C64,31.373,56.627,24,48,24z"
                    />
                    <text
                      x="50%"
                      y="57%"
                      textAnchor="middle"
                      fontSize="14"
                      fontWeight="bold"
                      fill="white"
                    >
                      CO₂
                    </text>
                  </svg>
                  <span>
                    Carbon Emission Savings : {carbonSaved} kg for 5 years
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* EMI Calculator */}
      <div id="emi-calculator" className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Your EMI Calculator
        </h2>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Loan Amount */}
            <div className="flex-1 space-y-6">
              <div>
                <label className="font-bold text-green-700 block mb-1">
                  Loan Amount
                </label>
                <span className="text-sm text-gray-500">
                  (select your required loan amount)
                </span>
                <input
                  type="range"
                  min="50000"
                  max="2000000"
                  step="10000"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-full mt-3"
                  style={{
                    background: `linear-gradient(to right, #00c853 0%, #00e676 ${
                      ((loanAmount - 50000) / (2000000 - 50000)) * 100
                    }%, #e5e7eb ${
                      ((loanAmount - 50000) / (2000000 - 50000)) * 100
                    }%, #e5e7eb 100%)`,
                  }}
                />
                <div className="inline-block mt-2 px-3 py-1 bg-purple-900 text-white rounded-lg font-semibold">
                  ₹{loanAmount.toLocaleString()}
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>₹50,000</span>
                  <span>₹20,00,000</span>
                </div>
              </div>

              {/* Interest */}
              <div>
                <label className="font-bold text-green-700 block mb-1">
                  Interest
                </label>
                <span className="text-sm text-gray-500">
                  (select your interest)
                </span>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.1"
                  value={interestRate}
                  onChange={(e) => setInterestRate(Number(e.target.value))}
                  className="w-full mt-3"
                  style={{
                    background: `linear-gradient(to right, #00c853 0%, #00e676 ${
                      ((interestRate - 1) / (30 - 1)) * 100
                    }%, #e5e7eb ${
                      ((interestRate - 1) / (30 - 1)) * 100
                    }%, #e5e7eb 100%)`,
                  }}
                />
                <div className="inline-block mt-2 px-3 py-1 bg-purple-900 text-white rounded-lg font-semibold">
                  {interestRate}%
                </div>
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>1%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Tenure */}
              <div>
                <label className="font-bold text-green-700 block mb-2">
                  Tenure in Months
                </label>
                <div className="flex flex-wrap gap-2">
                  {[12, 18, 24, 30, 36, 48, 60].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTenure(t)}
                      className={`px-4 py-2 rounded-lg font-semibold transition ${
                        tenure === t
                          ? "bg-purple-900 text-white shadow-md"
                          : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* EMI Results */}
            <div className="bg-blue-50 p-6 rounded-2xl flex-1 shadow-inner">
              <p className="text-center text-lg font-bold text-green-700">
                EMI
              </p>
              <h3 className="text-3xl font-bold text-center text-green-600 mb-4">
                ₹{emi.toLocaleString()}
              </h3>
              <p className="text-sm text-center text-gray-600 mb-4">
                As per the loan amount selected, please check breakdown
              </p>
              <hr className="border-t border-t-2 border-dashed border-gray-800 my-4" />
              <div className="mb-4">
                <p className="text-sm font-medium text-gray-600">
                  Total Payable
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <img
                    src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-percentage-vector-icon-png-image_4236991.jpg"
                    alt="Percent Icon"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-lg font-bold text-gray-800">
                    ₹{totalPayable.toLocaleString()}
                  </span>
                </div>
              </div>
              <hr className="border-t border-t-2 border-dashed border-gray-800 my-4" />
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Interest Component
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <img
                    src=" https://cdn-icons-png.freepik.com/512/1611/1611179.png"
                    alt="Percent Icon"
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-lg font-bold text-gray-800">
                    ₹{interestComponent.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsComparionTool;
