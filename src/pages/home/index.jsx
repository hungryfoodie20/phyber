import HeroOne from "@/components/Hero/HeroOne";
import OurOffer from "@/components/Ouroffer/OurOffer";
import ServiceOne from "@/components/Service/ServiceOne";
import KnowusOne from "@/components/Knowus/KnowusOne";
import ContactUs from "@/components/Contactus/ContactUs";
// import Scroll from "@/components/Scroll/Scroll";
import LayoutOne from "@/components/Layout/LayoutOne";
import HeaderOne from "@/components/Header/HeaderOne";
import FoooterOne from "@/components/Foooter/FoooterOne";
import DocImg from "@/assets/imgs/hero/hero1.png";
export default function HomePage() {
  return (
    <LayoutOne>
      <main>
        <HeroOne />
        <OurOffer />
        <ServiceOne />
        <KnowusOne />
        <ContactUs />
        {/* <Scroll /> */}
        <FoooterOne />
      </main>
    </LayoutOne>
  );
}
