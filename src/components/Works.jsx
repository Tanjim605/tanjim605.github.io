import Card from "./Card";
import SectionHead from "./SectionHead";

export default function Works() {
  const works = [
    {
      title: "Hospital Management System",
      description: `A management system done with c++. This doesn't have any GUI, all of the command are given by keyboard.`,
      learnMoreLink: "#",
      liveUrl: null,
      codeUrl: "https://github.com/Tanjim605/Hospital_Management_System",
      theme: "black",
    },
    {
      title: "Static Landing Page",
      description: `Made this static website while learning
      web development from The Odin Project.`,
      Icon: "dummy Image link",
      learnMoreLink: "#",
      liveUrl: "https://tanjim605.github.io/odin-LandingPage/",
      codeUrl: "https://github.com/Tanjim605/odin-LandingPage",
      theme: "white",
    },
    {
      title: "Sign-Up Form",
      description: `Made this static website while learning
        web development from The Odin Project.`,
      Icon: "dummy Image link",
      learnMoreLink: "#",
      liveUrl: "https://tanjim605.github.io/odin-SignUpForm/",
      codeUrl: "https://github.com/Tanjim605/odin-SignUpForm",
      theme: "green",
    },
    {
      title: "Email Marketing",
      description:
        "Nurture leads and foster customer relationships with personalized email campaigns.",
      Icon: "dummy Image link",
      learnMoreLink: "#",
      liveUrl: "#",
      codeUrl: "#",
      theme: "green",
    },
    {
      title: "Content Creation",
      description:
        "Captivate your audience with high-quality, engaging content tailored to your brand.",
      Icon: "dummy Image link",
      learnMoreLink: "#",
      liveUrl: "#",
      codeUrl: "#",
      theme: "black",
    },
    {
      title: "Analytics and Tracking",
      description:
        "Gain valuable insights into your performance and make data-driven decisions.",
      Icon: "dummy Image link",
      learnMoreLink: "#",
      liveUrl: "#",
      codeUrl: "#",
      theme: "white",
    },
  ];

  return (
    <section id="works" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          sectionId={"works"}
          heading={"My works"}
          descriptionText={
            "Here are some on my works. Some of them are just static page."
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {works.map((work, index) => (
            <Card
              key={index}
              title={work.title}
              description={work.description}
              Icon={work.Icon}
              liveUrl={work.liveUrl}
              codeUrl={work.codeUrl}
              theme={work.theme}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
