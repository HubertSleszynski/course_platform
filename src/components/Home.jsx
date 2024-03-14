import banner from "../assets/banner.png";
import Banner from "../shared/Banner";

const Home = () => {
  return (
    <div className="md:px-14 p-4 pt-28 max-w-screen-2xl mx-auto" id="home">
      <Banner
        banner={banner}
        heading={"Develop your skills without diligence"}
        subheading="Unlock your potential effortlessly with HRS,where learning becomes a joyous journey, devoid of strict discipline. Embrace a natural flow of growth as you refine your talents with ease."
        btn1="Get Started"
        btn2="Discount"
      />
    </div>
  );
};

export default Home;
