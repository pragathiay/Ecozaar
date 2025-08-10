import React, { useRef, useState, useEffect } from "react";

const vehicleComparisonPairs = [
  [
    {
      model: "Chetak 2903",
      price: "₹1,99,999",
      image:
        "https://imgd.aeplcdn.com/1280x720/n/cw/ec/194471/chetak-2025-right-side-view-2.jpeg?isig=0",
    },
    {
      model: "ATHER RIZTA Z 2.9kWh",
      price: "₹1,99,999",
      image:
        "https://assets.electricpe.com/shop-electric/vehicles/ather/rizta/z/cardamom-green-A8BAA9.webp",
    },
  ],
  [
    {
      model: "Ather 450S 2.9kWh",
      price: "₹1,99,999",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/m/w/k/s-portable-charger-450s-s-disc-booking-for-ex-showroom-price-pan-original-imah3j23zgep694k.jpeg?q=90&crop=false",
    },
    {
      model: "ATHER RIZTA Z 2.9kWh",
      price: "₹1,99,999",
      image:
        "https://rukminim3.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/t/x/c/-original-imah6rwfzrrgzsny.jpeg?q=90&crop=false",
    },
  ],
  [
    {
      model: "Chetak 2903",
      price: "₹1,99,999",
      image:
        "https://imgd.aeplcdn.com/1280x720/n/cw/ec/194471/chetak-2025-right-side-view-2.jpeg?isig=0",
    },
    {
      model: "ATHER RIZTA Z 2.9kWh",
      price: "₹1,99,999",
      image:
        "https://rukminim3.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/t/x/c/-original-imah6rwfzrrgzsny.jpeg?q=90&crop=false",
    },
  ],
  [
    {
      model: "Ather 450S 2.9kWh",
      price: "₹1,99,999",
      image:
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/m/w/k/s-portable-charger-450s-s-disc-booking-for-ex-showroom-price-pan-original-imah3j23zgep694k.jpeg?q=90&crop=false",
    },
    {
      model: "ATHER RIZTA Z 2.9kWh",
      price: "₹1,99,999",
      image:
        "https://rukminim3.flixcart.com/image/850/1000/xif0q/electric-bike-scooter/t/x/c/-original-imah6rwfzrrgzsny.jpeg?q=90&crop=false",
    },
  ],
];

const VehicleComparisonTool = () => {
  const scrollContainerRef = useRef(null);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentAltWordIndex, setCurrentAltWordIndex] = useState(0);
  const words = [
    "precision",
    "vision",
    "passion",
    "innovation",
    "succession",
    "evaluation",
  ];
  const altWords = ["Passion", "Innovation", "Success", "Vision", "Precision"];

  const handleScroll = (direction) => {
    const scrollAmount =
      direction === "left" ? -window.innerWidth * 0.8 : window.innerWidth * 0.8;
    scrollContainerRef.current?.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Animation for cycling through main words
  useEffect(() => {
    const wordRotationInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(wordRotationInterval);
  }, []);

  // Animation for cycling through alternate words
  useEffect(() => {
    const altWordInterval = setInterval(() => {
      setCurrentAltWordIndex((prevIndex) => (prevIndex + 1) % altWords.length);
    }, 2000);
    return () => clearInterval(altWordInterval);
  }, []);

  return (
    <div className="relative bg-[#121212] text-white py-10 px-4 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 opacity-20 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://cdn.pixabay.com/video/2024/09/16/231704_large.mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-#b4b4b4-300 leading-snug mb-10 ml-10">
          {/* First Row - "Start Compare Your" */}
          <div className="flex">
            {"Start Compare Your".split(" ").map((word, wordIndex) => (
              <span key={`word1-${wordIndex}`} className="inline-flex">
                {word.split("").map((letter, letterIndex) => (
                  <span
                    key={`letter1-${wordIndex}-${letterIndex}`}
                    className="transition-colors duration-300 hover:text-sky-400"
                  >
                    {letter}
                  </span>
                ))}
                {wordIndex < 2 && <span className="w-2" />}{" "}
                {/* Space between words */}
              </span>
            ))}
          </div>

          {/* Second Row - "Bike With" + Animated Words */}
          <div className="flex items-center mt-2">
            {"Bike With".split(" ").map((word, wordIndex) => (
              <span key={`word2-${wordIndex}`} className="inline-flex">
                {word.split("").map((letter, letterIndex) => (
                  <span
                    key={`letter2-${wordIndex}-${letterIndex}`}
                    className="transition-colors duration-300 hover:text-sky-400"
                  >
                    {letter}
                  </span>
                ))}
                {wordIndex < 1 && <span className="w-2" />}{" "}
                {/* Space between words */}
              </span>
            ))}{" "}
            <span className="relative inline-block h-10 overflow-hidden text-green-500 ml-2">
              {altWords[currentAltWordIndex]}
            </span>{" "}
            <span className="relative inline-block h-10 overflow-hidden text-green-500">
              {words.map((word, index) => (
                <span
                  key={word}
                  className={`absolute left-0 w-full text-left transition-all duration-500 ${
                    currentWordIndex === index
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-full"
                  }`}
                >
                  {word}
                </span>
              ))}
            </span>
          </div>
        </h2>

        {/* Rest of your existing component remains exactly the same */}
        <div className="relative group">
          {/* Left Navigation Button */}
          <button
            onClick={() => handleScroll("left")}
            className="hidden md:flex absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#4b2673] text-[#4b2673] hover:bg-[#f3edfd] rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll Left"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Scrollable Comparison Cards */}
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto gap-4 md:gap-6 px-2 md:px-6 py-4 scroll-smooth snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
          >
            {vehicleComparisonPairs.map((pair, pairIndex) => (
              <div
                key={pairIndex}
                className="min-w-[90vw] md:min-w-[500px] bg-white text-black rounded-xl shadow-md overflow-hidden snap-start hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="grid grid-cols-2 border-b">
                  {pair.map((vehicle, vehicleIndex) => (
                    <div
                      key={vehicleIndex}
                      className="p-4 flex flex-col items-center text-center border-r last:border-r-0 hover:bg-gray-50 transition-colors duration-200"
                    >
                      <img
                        src={vehicle.image}
                        alt={vehicle.model}
                        className="h-[100px] md:h-[120px] object-contain bg-gray-50 rounded mb-2 hover:scale-105 transition-transform duration-300"
                      />
                      <h3 className="font-semibold text-xs md:text-sm hover:text-green-600 transition-colors">
                        {vehicle.model}
                      </h3>
                      <p className="text-xs md:text-sm text-gray-700 hover:text-black transition-colors">
                        {vehicle.price}
                      </p>
                    </div>
                  ))}
                </div>
                <button className="w-full bg-[#2a1c4d] hover:bg-[#20113c] text-white text-center py-3 font-medium cursor-pointer transition-colors duration-300 hover:shadow-inner">
                  Compare
                </button>
              </div>
            ))}
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={() => handleScroll("right")}
            className="hidden md:flex absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white border border-[#4b2673] text-[#4b2673] hover:bg-[#f3edfd] rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Scroll Right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleComparisonTool;
