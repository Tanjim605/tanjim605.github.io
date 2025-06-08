import SectionHead from "./SectionHead";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHead heading={"About"} descriptionText={"heloop text"} />
        </div>
      </section>
    </>
  );
}
