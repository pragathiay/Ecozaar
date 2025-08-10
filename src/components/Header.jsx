import { useState, useEffect } from "react";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);
  const [activeTab, setActiveTab] = useState(null); // Track active tab

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setIsMobileView(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const evScootersOptions = [
    "OLA",
    "Ather",
    "Chetak",
    "TVS",
    "Savings Calculator",
  ];
  const staticLinks = [
    { label: "Exchange", id: "exchange" },
    { label: "Check Loan Eligibility", id: "loan" },
    { label: "Comparisons", id: "comparisons" },

    { label: "Calculators", id: "calculators" },
    { label: "Blogs", id: "blogs" },
  ];

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="sticky-header-container">
      {/* Main Header (unchanged) */}
      <header
        className={`bg-white py-3 border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
          isSticky ? "shadow-md py-2" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Location */}
          <div className="flex items-center gap-4">
            <img
              src="/assets/Logo.png"
              alt="Ecozaar Logo"
              className={`transition-all duration-300 ${
                isSticky ? "h-10" : "h-14"
              }`}
            />
            <div className="hidden md:flex items-center border border-gray-300 rounded-full px-4 py-1 bg-white shadow-sm">
              <span className="text-sm font-medium mr-2">560055</span>
              <div className="w-8 h-8 border-2 border-green-500 rounded-full flex items-center justify-center">
                {/* location icon SVG */}
                <svg
                  width="13"
                  height="18"
                  viewBox="0 0 13 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.45308 1C3.19397 1 0.542603 3.65137 0.542603 6.91047C0.542603 7.9834 1.02378 9.13733 1.04395 9.18601C1.19936 9.55489 1.50601 10.1279 1.72713 10.4637L5.77963 16.604C5.94547 16.8557 6.19093 17 6.45308 17C6.71522 17 6.96068 16.8557 7.12652 16.6043L11.1794 10.4637C11.4008 10.1279 11.7071 9.55489 11.8625 9.18601C11.8827 9.13768 12.3636 7.98375 12.3636 6.91047C12.3636 3.65137 9.71218 1 6.45308 1ZM11.2214 8.91621C11.0827 9.24685 10.7973 9.77983 10.5988 10.0809L6.54591 16.2216C6.46594 16.3429 6.44056 16.3429 6.36059 16.2216L2.30775 10.0809C2.10923 9.77983 1.82378 9.2465 1.68506 8.91586C1.67915 8.90161 1.23795 7.83946 1.23795 6.91047C1.23795 4.03485 3.57746 1.69535 6.45308 1.69535C9.3287 1.69535 11.6682 4.03485 11.6682 6.91047C11.6682 7.84085 11.226 8.90578 11.2214 8.91621Z"
                    fill="#2A1C4D"
                    stroke="#2A1C4D"
                  />
                  <path
                    d="M6.45305 3.78175C4.72754 3.78175 3.32397 5.18566 3.32397 6.91083C3.32397 8.63599 4.72754 10.0399 6.45305 10.0399C8.17856 10.0399 9.58212 8.63599 9.58212 6.91083C9.58212 5.18566 8.17856 3.78175 6.45305 3.78175ZM6.45305 9.34455C5.11137 9.34455 4.01932 8.25285 4.01932 6.91083C4.01932 5.5688 5.11137 4.4771 6.45305 4.4771C7.79473 4.4771 8.88677 5.5688 8.88677 6.91083C8.88677 8.25285 7.79473 9.34455 6.45305 9.34455Z"
                    fill="#2A1C4D"
                    stroke="#2A1C4D"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Search */}
          <div className="hidden lg:flex flex-1 max-w-lg mx-6">
            <input
              type="text"
              placeholder="Search Product, type or brand"
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 text-sm"
            />
          </div>

          {/* Icons */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="flex gap-2">
              <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center">
                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.953125"
                    y="0.5"
                    width="35"
                    height="35"
                    rx="17.5"
                    fill="#F7F9EC"
                  />
                  <rect
                    x="0.953125"
                    y="0.5"
                    width="35"
                    height="35"
                    rx="17.5"
                    stroke="#39B54A"
                  />
                  <rect
                    x="4.45312"
                    y="4"
                    width="28"
                    height="28"
                    rx="14"
                    fill="#F7F9EC"
                  />
                  <path
                    d="M24.1975 13.149C22.8855 11.837 20.5386 11.3509 18.4479 13.311C17.9385 12.788 17.303 12.4051 16.6026 12.1991C15.9023 11.9931 15.1606 11.971 14.4493 12.135C13.788 12.3104 13.1842 12.6561 12.6982 13.1376C12.2121 13.6191 11.8607 14.2195 11.679 14.8791C11.2974 16.3061 11.7835 17.8323 13.0118 19.0607L17.6063 23.6499C17.7166 23.7609 17.8477 23.8489 17.9921 23.909C18.1366 23.9691 18.2914 24 18.4479 24C18.6043 24 18.7592 23.9691 18.9036 23.909C19.048 23.8489 19.1791 23.7609 19.2894 23.6499L23.8839 19.0607C26.0322 16.9385 25.5513 14.5028 24.1975 13.149ZM23.5128 18.7157L18.9183 23.3102C18.7924 23.4328 18.6236 23.5014 18.4479 23.5014C18.2721 23.5014 18.1033 23.4328 17.9774 23.3102L13.383 18.7157C12.2696 17.6023 11.8462 16.2956 12.186 15.0568C12.3725 14.338 12.7925 13.7016 13.38 13.2475C13.9676 12.7933 14.6893 12.5473 15.4319 12.5479C15.9649 12.5642 16.4894 12.6863 16.9749 12.907C17.4603 13.1277 17.897 13.4427 18.2597 13.8337C18.3102 13.8828 18.3775 13.9109 18.4479 13.9121C18.5167 13.9106 18.5822 13.8825 18.6308 13.8337C20.5282 11.9363 22.6556 12.3388 23.8578 13.5149C25.06 14.6909 25.4049 16.8183 23.5128 18.7157Z"
                    fill="#2A1C4D"
                    stroke="#2A1C4D"
                  />
                </svg>
              </button>

              <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center">
                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1.04688"
                    y="0.5"
                    width="35"
                    height="35"
                    rx="17.5"
                    fill="#F7F9EC"
                  />
                  <rect
                    x="1.04688"
                    y="0.5"
                    width="35"
                    height="35"
                    rx="17.5"
                    stroke="#39B54A"
                  />
                  <path
                    d="M15.5718 22.5674C14.6239 22.5674 13.8555 23.3358 13.8555 24.2837C13.8555 25.2316 14.6239 26 15.5718 26C16.5197 26 17.2881 25.2315 17.2881 24.2837C17.2881 23.3358 16.5197 22.5674 15.5718 22.5674ZM15.5718 25.2372C15.0452 25.2372 14.6183 24.8103 14.6183 24.2837C14.6183 23.7571 15.0452 23.3302 15.5718 23.3302C16.0984 23.3302 16.5253 23.7571 16.5253 24.2837C16.5253 24.8103 16.0984 25.2372 15.5718 25.2372Z"
                    fill="#2A1C4D"
                    stroke="#2A1C4D"
                    stroke-width="0.5"
                  />
                  <path
                    d="M22.8176 22.5674C21.8697 22.5674 21.1013 23.3358 21.1013 24.2837C21.1013 25.2316 21.8698 26 22.8176 26C23.7655 26 24.534 25.2315 24.534 24.2837C24.534 23.3358 23.7656 22.5674 22.8176 22.5674ZM22.8176 25.2372C22.291 25.2372 21.8641 24.8103 21.8641 24.2837C21.8641 23.7571 22.291 23.3302 22.8176 23.3302C23.3442 23.3302 23.7711 23.7571 23.7711 24.2837C23.7712 24.8103 23.3442 25.2372 22.8176 25.2372Z"
                    fill="#2A1C4D"
                    stroke="#2A1C4D"
                    stroke-width="0.5"
                  />
                  <path
                    d="M26.6893 12.5555C26.6098 12.4687 26.5012 12.4144 26.3841 12.4029L13.9694 12.2312L13.6261 11.1824C13.3843 10.4812 12.7277 10.0078 11.986 10H10.7083C10.4977 10 10.3269 10.1708 10.3269 10.3814C10.3269 10.5921 10.4977 10.7628 10.7083 10.7628H11.986C12.4007 10.772 12.7659 11.0383 12.9014 11.4303L15.3233 18.7342L15.1327 19.1728C14.92 19.7213 14.9838 20.3386 15.3043 20.832C15.6217 21.3165 16.1556 21.6155 16.7346 21.6329H24.153C24.3636 21.6329 24.5344 21.4622 24.5344 21.2515C24.5344 21.0409 24.3636 20.8701 24.153 20.8701H16.7345C16.4076 20.8619 16.1066 20.6899 15.9336 20.4124C15.7625 20.1383 15.7273 19.8006 15.8382 19.497L15.9908 19.1538L24.0194 18.3146C24.9013 18.2175 25.6268 17.5761 25.8311 16.7127L26.7465 12.8796C26.7878 12.7692 26.7659 12.6451 26.6893 12.5555ZM25.0874 16.5411C24.9636 17.0969 24.4917 17.5069 23.9241 17.5519L15.9908 18.3719L14.2173 12.9941L25.9074 13.1657L25.0874 16.5411Z"
                    fill="#2A1C4D"
                    stroke="#2A1C4D"
                    stroke-width="0.5"
                  />
                </svg>
              </button>

              <button className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center">
                <svg
                  width="37"
                  height="36"
                  viewBox="0 0 37 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.546875"
                    width="36"
                    height="36"
                    rx="18"
                    fill="#F7F9EC"
                  />
                  <rect
                    x="1.04688"
                    y="0.5"
                    width="35"
                    height="35"
                    rx="17.5"
                    fill="#F7F9EC"
                  />
                  <rect
                    x="1.04688"
                    y="0.5"
                    width="35"
                    height="35"
                    rx="17.5"
                    stroke="#39B54A"
                  />
                  <path
                    d="M18.5471 10C16.165 10 14.2271 11.8925 14.2271 14.2188C14.2271 16.545 16.165 18.4375 18.5471 18.4375C20.9291 18.4375 22.8671 16.545 22.8671 14.2188C22.8671 11.8925 20.9291 10 18.5471 10ZM18.5471 17.5C16.6943 17.5 15.1871 16.028 15.1871 14.2188C15.1871 12.4095 16.6943 10.9375 18.5471 10.9375C20.3998 10.9375 21.9071 12.4095 21.9071 14.2188C21.9071 16.028 20.3998 17.5 18.5471 17.5Z"
                    fill="#2A1C4D"
                    stroke="#2A1C4D"
                    stroke-width="0.4"
                  />
                  <path
                    d="M23.9218 21.1936C22.7391 20.0208 21.1712 19.375 19.5069 19.375H17.5869C15.9227 19.375 14.3547 20.0208 13.172 21.1936C11.9951 22.3606 11.3469 23.901 11.3469 25.5312C11.3469 25.7901 11.5618 26 11.8269 26H25.2669C25.532 26 25.7469 25.7901 25.7469 25.5312C25.7469 23.901 25.0988 22.3606 23.9218 21.1936ZM12.328 25.0625C12.5685 22.4036 14.8353 20.3125 17.5869 20.3125H19.5069C22.2586 20.3125 24.5253 22.4036 24.7658 25.0625H12.328Z"
                    fill="#2A1C4D"
                    stroke="#2A1C4D"
                    stroke-width="0.4"
                  />
                </svg>
              </button>
            </div>

            {/* Hamburger */}
            <button
              className="lg:hidden ml-2 text-2xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav
        className={`bg-green-50 sticky top-[64px] z-40 transition-all duration-300 ${
          isSticky ? "top-[56px]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden lg:flex justify-between items-center py-2 text-sm">
          {/* EV Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => !isMobileView && setActiveDropdown("ev")}
            onMouseLeave={() => !isMobileView && setActiveDropdown(null)}
          >
            <span
              className={`cursor-pointer font-medium hover:text-green-600 text-[#2a1c4d] flex items-center ${
                activeTab === "ev" ? "border-b-2 border-green-500" : ""
              }`}
              onClick={() => handleTabClick("ev")}
            >
              EV Scooters ▾
            </span>
            {activeDropdown === "ev" && (
              <div className="absolute left-0 top-full bg-white shadow-lg mt-2 rounded w-48 text-gray-800 z-50">
                {evScootersOptions.map((item, idx) => (
                  <div
                    key={idx}
                    className="block px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Solar Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("solar")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span
              className={`cursor-pointer font-medium hover:text-green-600 text-[#2a1c4d] flex items-center ${
                activeTab === "solar" ? "border-b-2 border-green-500" : ""
              }`}
              onClick={() => handleTabClick("solar")}
            >
              Rooftop Solar ▾
            </span>
          </div>

          {/* Static Links */}
          {staticLinks.map((link) => (
            <div
              key={link.id}
              className={`font-medium hover:text-green-600 text-[#2a1c4d] cursor-pointer ${
                activeTab === link.id ? "border-b-2 border-green-500" : ""
              }`}
              onClick={() => handleTabClick(link.id)}
            >
              {link.label}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-4 text-sm space-y-4">
          {/* EV Dropdown Mobile */}
          <div>
            <button
              className={`w-full text-left font-medium text-[#2a1c4d] hover:text-green-600 ${
                activeTab === "ev" ? "border-b-2 border-green-500" : ""
              }`}
              onClick={() => toggleDropdown("ev")}
            >
              EV Scooters {activeDropdown === "ev" ? "▴" : "▾"}
            </button>
            {activeDropdown === "ev" && (
              <ul className="pl-4 mt-1 space-y-1 text-gray-700">
                {evScootersOptions.map((item, idx) => (
                  <li key={idx}>
                    <div className="block py-1 hover:text-green-600 cursor-pointer">
                      {item}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Solar Dropdown Mobile */}
          <div>
            <button
              className={`w-full text-left font-medium text-[#2a1c4d] hover:text-green-600 ${
                activeTab === "solar" ? "border-b-2 border-green-500" : ""
              }`}
              onClick={() => toggleDropdown("solar")}
            >
              Rooftop Solar ▾
            </button>
          </div>

          {/* Static Links Mobile */}
          {staticLinks.map((link) => (
            <div
              key={link.id}
              className={`block font-medium text-[#2a1c4d] hover:text-green-600 cursor-pointer ${
                activeTab === link.id ? "border-b-2 border-green-500" : ""
              }`}
              onClick={() => handleTabClick(link.id)}
            >
              {link.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Header;
