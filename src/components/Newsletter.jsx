import banner from "../assets/newsletter.png";
import Banner from "../shared/Banner";

const Newsletter = () => {
  return (
    <div className="md:px-14 p-4 max-w-screen-2xl my-12 mx-auto">
      <Banner
        banner={banner}
        heading={"Each student can share their discount code with friends"}
        subheading="Extend the benefits of learning to your circle by sharing your personalized discount code with friends."
        btn1="Generate code"
        btn2="I have a code"
      />
    </div>
  );
};

export default Newsletter;
