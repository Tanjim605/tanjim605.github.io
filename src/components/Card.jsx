import { ExternalLink } from "lucide-react";

export default function Card({
  title,
  description,
  liveUrl,
  codeUrl,
  bgColorClass,
  textColorClass,
  learnMoreColorClass,
  theme,
}) {
  let headingBgColorClass;
  if (theme == "green") {
    headingBgColorClass = "bg-white";
    bgColorClass = "bg-lime-200";
    textColorClass = "text-slate-600";
    learnMoreColorClass = "text-slate-800 hover:text-slate-700";
  } else if (theme == "black") {
    headingBgColorClass = "bg-white";
    bgColorClass = "bg-slate-800";
    textColorClass = "text-slate-300";
    learnMoreColorClass = "text-lime-400 hover:text-lime-300";
  } else {
    headingBgColorClass = "bg-lime-300";
    bgColorClass = "bg-lime-50";
    textColorClass = "text-slate-600";
    learnMoreColorClass = "text-slate-800 hover:text-slate-700";
  }

  return (
    <div
      className={`p-6 md:p-8 rounded-3xl shadow-[0px_5px_0px_0px_rgba(25,26,35,1.00)] dark:shadow-amber-50/20 flex flex-col justify-between min-h-[280px] md:min-h-[320px] ${bgColorClass} outline outline-offset-[-1px] outline-[#191a23] transition-all duration-300 hover:shadow-2xl hover:scale-105`}
    >
      <div>
        <h3
          className={`text-xl md:text-2xl rounded-2xl p-3 ${headingBgColorClass} font-semibold mb-2 text-slate-900`}
        >
          {title}
        </h3>
        <p className={`text-sm md:text-base mb-4 ${textColorClass}`}>
          {description}
        </p>
      </div>
      <div className="flex gap-5 items-end">
        <a
          href={codeUrl}
          target="_blank"
          className={`bg-orange-600 px-5 py-2 rounded-2xl inline-flex items-center font-medium ${learnMoreColorClass} text-white group`}
        >
          Code
          {/* <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" /> */}
        </a>
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            className={`bg-orange-600 px-5 py-2 rounded-2xl inline-flex items-center font-medium ${learnMoreColorClass} text-white group`}
          >
            Live Link <ExternalLink size={17} className="ml-2" />
          </a>
        )}
      </div>
    </div>
  );
}
