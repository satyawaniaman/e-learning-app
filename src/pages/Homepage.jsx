import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import NavbarBanner from "../components/NavbarBanner";
import NumberCounter from "../components/NumberCounter";
import WhyChooseUs from "../components/WhyChooseUs";
import Banner from "../components/Banner";
import { BannerData, BannerData2 } from "../utility/BannerData";
import SubjectCard from "../components/SubjectCard";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

function home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <SubjectCard />
      <Testimonial />
      <Footer />
    </main>
  );
}

export default home;
