import Coursel from "../../components/coursole";

const destinations = [
  {
    name: "New Delhi",
    state: "Delhi",
    properties: 4688,
    imageUrl: "https://i.ytimg.com/vi/JW1jSINTzaw/maxresdefault.jpg",
    url: "https://delhitourism.travel/places-to-visit-in-delhi",
  },
  {
    name: "Mumbai",
    state: "Maharashtra",
    properties: 1766,
    imageUrl: "https://images.saymedia-content.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MjAzNzI4MDY1Nzg2ODE2Mjg4/things-to-do-in-mumbai.jpg",
    url: "https://mumbaitourism.travel/top-places-to-visit-in-mumbai",
  },
  {
    name: "Goa",
    state: "Goa",
    properties: 4728,
    imageUrl: "https://hotel.hardrock.com/goa/files/6021/23578312_ImageLargeWidth.jpg",
    url: "https://www.tourmyindia.com/blog/top-places-must-visit-goa/",
  },
  {
    name: "Chennai",
    state: "Tamil Nadu",
    properties: 1401,
    imageUrl: "https://www.thomascook.in/blog/wp-content/uploads/2019/05/img-7-e1531194581524.jpg",
    url: "https://www.travelandleisureasia.com/in/destinations/india/a-travellers-guide-to-the-top-tourist-places-in-chennai/",
  },
  {
    name: "Kolkata",
    state: "West Bengal",
    properties: 968,
    imageUrl: "https://images.squarespace-cdn.com/content/v1/51a39504e4b093105c265c24/1536533414626-8F6T2DZFJY6L0SZRT2R6/victoria-memorial-reflected.jpg",
    url: "https://www.mensxp.com/culture/travel/175631-top-places-to-visit-in-kolkata-best-tourist-spots.html",
  },
  {
    name: "Hyderabad",
    state: "Telangana",
    properties: 1527,
    imageUrl: "https://media.cntraveller.in/wp-content/uploads/2019/04/Hyderabad-Lead-1366x768.jpg",
    url: "https://hyderabadexpert.com/top-10-must-visit-tourist-places-in-hyderabad/",
  },
];

const DestinationCard = ({ destination }) => {
  return (
    <a href={destination.url} target="_blank" rel="noopener noreferrer" className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 w-72 h-48 mb-8">
        <img
          src={destination.imageUrl}
          alt={destination.name}
          className="w-full h-32 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{destination.name}</h3>
          <p className="text-gray-600">{destination.state}</p>
          <p className="text-gray-600">{destination.properties} Properties</p>
        </div>
      </div>
    </a>
  );
};

const WelcomeSection = () => {
  return (
    <section className="bg-green-500 text-white py-12 md:py-16 lg:py-20 mb-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Welcome to Track and Go
        </h1>
        <p className="text-base md:text-lg lg:text-xl mb-6">
          Your one-stop solution for all your travel needs. Plan, book, and manage your trips with ease.
        </p>
        <button className="bg-white text-green-500 font-semibold py-2 px-4 rounded hover:bg-gray-200 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-12 ">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">About Track and Go</h2>
        <p className="text-gray-700 mb-6">
          Launched in 2007, Track and Go is a technology company focused on empowering Indian travellers to plan, book, and manage their trips across rail, air, buses, and hotels. We assist travellers in making smarter travel decisions by leveraging artificial intelligence, machine learning, and data science-led innovations on our OTA platforms, comprising our websites and mobile applications.
        </p>
        <p className="text-gray-700 mb-6">
          Our vision is to become the most customer-centric travel company, offering the best customer experience to our users. Our focus on travel utility and customer experience for travellers in the 'next billion user' segment is driven by technology, cost-efficiency, and our culture of innovation. This has made us India's leading travel ecosystem for the 'next billion users'.
        </p>
        <p className="text-gray-700 mb-6">
          Join us on this journey to make travel planning and management easier, smarter, and more enjoyable.
        </p>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="font-poppins">
      <WelcomeSection />
      <Coursel className="mb-12" />
      <div className="container mx-auto p-4 mb-12">
        <h1 className="text-3xl font-semibold mb-4">Popular Destinations</h1>
        <div className="flex flex-wrap justify-around -mx-4 -mb-4">
          {destinations.map((destination) => (
            <DestinationCard key={destination.name} destination={destination} />
          ))}
        </div>
      </div>
      <AboutSection />
    </div>
  );
};

export default Home;