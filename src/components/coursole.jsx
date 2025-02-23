import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItems = [
  {
    img: "./coursole/refund.webp",
    title: "Instant & full refunds",
    highlight: "with Assured",
    bgColor: "bg-blue-100",
  },
  {
    img: "/coursol/free-cancellation.webp",
    title: "Free-Cancilation",
    highlight: "fare alerts",
    bgColor: "bg-yellow-100",
  },
  {
    img: "/coursole/IRCTC-train.webp",
    title: "Track train delays,",
    highlight: "boarding gate & baggage belt",
    bgColor: "bg-purple-100",
  },
  {
    img: "./coursole/customer-support.webp",
    title: "24x7",
    highlight: "customer support",
    bgColor: "bg-orange-100",
  },
  {
    img: "/coursole/lowest-fares.webp",
    title: "Lowest fares",
    highlight: "with Track & Go",
    bgColor: "bg-pink-100",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide feature using useEffect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Why Book With Track and Go?</h2>
      <div className="relative w-full max-w-5xl overflow-hidden">
        {/* Carousel Items */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`flex flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 ${item.bgColor} rounded-xl shadow-lg flex-col items-center justify-center text-center mx-2`}
            >
              <img src={item.img} alt="icon" className="w-16 h-16 mb-3" />
              <p className="text-base font-medium text-gray-700">
                {item.title} <span className="font-bold text-gray-900">{item.highlight}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex mt-6 space-x-6">
        <button onClick={prevSlide} className="p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition">
          <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="p-3 bg-gray-300 rounded-full hover:bg-gray-400 transition">
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex mt-4 space-x-2">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-gray-800" : "bg-gray-400"} transition`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;