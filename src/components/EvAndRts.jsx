import React, { useState, useRef } from "react";

const EvAndRts = () => {
  const scrollRefEV = useRef();
  const scrollRefSolar = useRef();
  const [wishlist, setWishlist] = useState([]);

  // Seed Data with 5 Items Each
  const seedEvProducts = [
    {
      _id: 1,
      name: "ATHER RIZTA Z 2.9kWh",
      description: "120 KM Range | 7.5 Hrs Charging",
      price: 199999,
      emi: 4999,
      imageUrl: "/assets/bike.png",
    },
    {
      _id: 2,
      name: "TATHER RIZTA Z 2.9kWh",
      description: "120 KM Range | 7.5 Hrs Charging",
      price: 199999,
      emi: 4999,
      imageUrl: "/assets/scooter.png",
    },
    {
      _id: 3,
      name: "ATHER RIZTA Z 2.9kWh",
      description: "120 KM Range | 7.5 Hrs Charging",
      price: 199999,
      emi: 4999,
      imageUrl: "/assets/bike.png",
    },
    {
      _id: 4,
      name: "ATHER RIZTA Z 2.9kWh",
      description: "120 KM Range | 7.5 Hrs Charging",
      price: 199999,
      emi: 1999,
      imageUrl: "/assets/scooter.png",
    },
    {
      _id: 5,
      name: "ATHER RIZTA Z 2.9kWh",
      description: "120 KM Range | 7.5 Hrs Charging",
      price: 199999,
      emi: 4999,
      imageUrl: "/assets/bike.png",
    },
  ];

  const solarData = [
    {
      _id: 11,
      name: "Tata Power 10kW (9.88kw)AS",
      price: 199999,
      range: "120 KM Range",
      chargeTime: "7.5 Hrs Charging",
      imageUrl: "/assets/Solar.png",
    },
    {
      _id: 12,
      name: "Tata Power 10kW (9.88kw)AS",
      price: 199999,
      range: "120 KM Range",
      chargeTime: "6 Hrs Charging",
      imageUrl: "/assets/Solar.png",
    },
    {
      _id: 13,
      name: "Tata Power 10kW (9.88kw)AS",
      price: 199999,
      range: "120 KM Range",
      chargeTime: "5.5 Hrs Charging",
      imageUrl: "/assets/Solar.png",
    },
    {
      _id: 14,
      name: "Tata Power 10kW (9.88kw)AS",
      price: 199999,
      range: "120 KM Range",
      chargeTime: "5 Hrs Charging",
      imageUrl: "/assets/Solar.png",
    },
    {
      _id: 15,
      name: "Tata Power 10kW (9.88kw)AS",
      price: 199999,
      range: "120 KM Range",
      chargeTime: "4.5 Hrs Charging",
      imageUrl: "/assets/Solar.png",
    },
  ];

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const scroll = (ref, direction) => {
    const { current } = ref;
    if (!current) return;
    const scrollAmount = direction === "left" ? -300 : 300;
    current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // SVG Components
  const RecommendIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="14"
      viewBox="0 0 24 24"
      width="14"
      fill="white"
      className="mr-1"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2L15.09 8.26 22 9.27l-5 4.87L18.18 22 
      12 18.27 5.82 22 7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  );

  const HeartIcon = ({ filled }) =>
    filled ? (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
        fill="red"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
        2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
        4.5 2.09C13.09 3.81 14.76 3 
        16.5 3 19.58 3 22 5.42 22 8.5c0 
        3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    ) : (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="20"
        width="20"
        fill="none"
        stroke="black"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 
        2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
        4.5 2.09C13.09 3.81 14.76 3 
        16.5 3 19.58 3 22 5.42 22 8.5c0 
        3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    );

  const renderCarousel = (title, data, ref, isSolar = false) => (
    <div className="p-5 relative">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <button className="px-4 py-1.5 text-sm font-semibold text-black-700 border border-green-600 rounded-full hover:bg-green-600 hover:text-white transition-all duration-200">
          View All
        </button>
      </div>
      <div className="relative">
        <button
          className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-100 text-2xl p-1 rounded-full shadow-sm z-10 hover:bg-gray-200"
          onClick={() => scroll(ref, "left")}
        >
          ‹
        </button>
        <div
          className="flex gap-4 overflow-x-auto scroll-smooth py-2 [&::-webkit-scrollbar]:hidden"
          ref={ref}
        >
          {data.map((item) => (
            <div
              key={item._id}
              className="min-w-[250px] bg-white rounded-lg border border-gray-200 shadow-sm relative"
            >
              {/* Recommended Badge */}
              <div className="absolute top-2 left-2 flex items-center bg-green-600 text-white text-xs px-2 py-0.5 rounded">
                <RecommendIcon />
                {isSolar ? "Recommended" : "Fast Selling"}
              </div>

              {/* Compare & Wishlist */}
              <div className="flex justify-between px-3 pt-10">
                <label className="text-xs flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                  <input type="checkbox" className="accent-purple-500" />{" "}
                  Compare
                </label>
                <span
                  className="cursor-pointer"
                  onClick={() => toggleWishlist(item._id)}
                >
                  <HeartIcon filled={wishlist.includes(item._id)} />
                </span>
              </div>
              <h3 className="text-lg font-mediun m-2">{item.name}</h3>
              {/* Image */}
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-[160px] object-contain px-3"
              />

              {/* Name & Description */}
              <div className="px-3 pb-3">
                <p className="text-xs text-gray-600 mt-1">
                  {isSolar
                    ? `${item.range} | ${item.chargeTime}`
                    : item.description}
                </p>

                {/* Price & EMI */}
                <p className="text-sm font-semibold mt-2">
                  EMI : ₹
                  {item.emi || Math.round(item.price / 40).toLocaleString()}
                </p>
                <p className="text-xs text-gray-500">
                  or ₹{item.price.toLocaleString()}
                </p>

                {/* Buttons */}
                <div className="flex gap-2 mt-3">
                  {isSolar && (
                    <button className="flex-1 py-1.5 border border-purple-700 text-purple-700 rounded hover:bg-purple-50">
                      Add to Cart
                    </button>
                  )}
                  <button className="flex-1 py-1.5 bg-purple-900 text-white rounded hover:bg-purple-800">
                    Explore
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-gray-100 text-2xl p-1 rounded-full shadow-sm z-10 hover:bg-gray-200"
          onClick={() => scroll(ref, "right")}
        >
          ›
        </button>
      </div>
    </div>
  );

  return (
    <>
      {renderCarousel("Popular EV Scooters", seedEvProducts, scrollRefEV)}
      {renderCarousel("Popular Rooftop Solar", solarData, scrollRefSolar, true)}
    </>
  );
};

export default EvAndRts;
