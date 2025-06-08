import DropDownCard from "./DropDownCard";
import SectionHead from "./SectionHead";

import { useState } from "react";

export default function Skills() {
  const [openIndex, setOpenIndex] = useState(0); // first card is open

  const skillSet = [
    {
      title: "Languages",
      content: "Programming/Markup Languages",
      icons: [
        { path: "/assets/image/languages/c.png", text: "C" },
        { path: "/assets/image/languages/cpp.png", text: "CPP" },
        { path: "/assets/image/languages/html.png", text: "HTML" },
        { path: "/assets/image/languages/css.png", text: "CSS" },
        { path: "/assets/image/languages/javascript.png", text: "JavaScript" },
      ],
    },
    {
      title: "Frameworks",
      content: "",
      icons: [
        { path: "/assets/image/frameworks/bootstrap.png", text: "Bootstrap" },
      ],
    },
    {
      title: "Libraries",
      content: " ",
      icons: [{ path: "/assets/image/library/react.png", text: "React" }],
    },
    {
      title: "Database",
      content: "",
      icons: [{ path: "/assets/image/database/mongoDb.png", text: "MongoDB" }],
    },
    {
      title: "IDEs",
      content: "Development Tool",
      icons: [{ path: "/assets/image/ide/vscode.png", text: "VS Code" }],
    },
    {
      title: "VCS",
      content: "Version Control Systems",
      icons: [{ path: "/assets/image/vcs/git.png", text: "Git" }],
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Allows closing the open item by clicking it again
  };

  return (
    <section id="skill" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHead
          heading={"Skill"}
          descriptionText={"Here are the tools and language I am familiar with"}
        />
        <div className="flex flex-wrap mx-auto space-y-4">
          {skillSet.map((item, index) => (
            <DropDownCard
              key={index}
              number={`0${index + 1}`}
              title={item.title}
              content={item.content}
              icons={item.icons}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
