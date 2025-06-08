import Highlight from "./Highlight";

export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-2 w-full h-full">
            <img src="../../assets/image/minimal-male1.jpg" alt="" className="rounded-full outline-2   mx-auto w-64 lg:w-96" />
          </div>
          {/* Text Content */}
          <div className="lg:order-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-amber-100 leading-tight mb-6">
              Hello! I'm <br /> Kazi Tanjimul Islam
            </h1>
            <p className="text-slate-600 dark:text-slate-300 text-lg lg:text-xl mb-8">
              I am a Computer Science student at IIUC.
              <br /> Familiar with <Highlight>
                Frontend Development
              </Highlight>, <Highlight>React</Highlight>,{" "}
              <Highlight>MERN Stack</Highlight>, and{" "}
              <Highlight>Problem solver</Highlight>.
            </p>
            <a
              // download
              href="#about"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-slate-800 hover:bg-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 transition-colors shadow-md hover:shadow-lg"
            >
              Scroll Down ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
