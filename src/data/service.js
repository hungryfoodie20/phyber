import ServiceOneImageOne from "@/assets/imgs/icon/img1.png";
import ServiceOneImageTwo from "@/assets/imgs/icon/img2.png";
import ServiceOneImageThree from "@/assets/imgs/icon/img3.png";
import ServiceOneImageFour from "@/assets/imgs/icon/img4.png";
import ServiceOneImageFive from "@/assets/imgs/icon/img5.png";

export const serviceOne = {
  title: {
    sliceOne: "Why should you choose phyber",
  },
  services: [
    {
      icon: ServiceOneImageOne,
      title: "Trustworthy Services",
      description:
        "Access reliable and compassionate care, fostering a safe and supportive environment ",
      animation: { name: "fade-slide bottom" },
      classNames: "border-b1",
    },
    {
      icon: ServiceOneImageTwo,
      title: "Integrated Care",
      description:
        "Connect with professionals for consultations, referrals, and specialized care .",
      animation: { name: "fade-slide top" },
      //   classNames: "border-b2 mt-md-5",
      classNames: "border-b2",
    },
    {
      icon: ServiceOneImageThree,
      title: "Instant Access",
      description:
        "Keeping families, employees, and support networks informed and engaged.",
      animation: { name: "fade-slide bottom" },
      classNames: "border-b1",
    },
    {
      icon: ServiceOneImageFour,
      title: "Wellness Management",
      description:
        "Offering timely updates and professional advice for proactive health management.",
      animation: { name: "fade-slide top" },
      classNames: "border-b2",
    },
    {
      icon: ServiceOneImageFive,
      title: "Hyper personalised Care",
      description:
        "Receive tailored care ensuring the most effective and targeted approach to individual well-being",
      animation: { name: "fade-slide bottom" },
      classNames: "border-b1",
    },
  ],
};
