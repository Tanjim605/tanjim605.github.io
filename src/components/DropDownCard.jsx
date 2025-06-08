import { Minus, Plus } from "lucide-react";
import SkillIcon from "./SkillIcon";

export default function DropDownCard({
  number,
  title,
  content,
  icons,
  isOpen,
  onToggle,
}) {
  return (
    <div
      className={`m-4 w-full lg:w-3/7 border border-slate-200 dark:border-slate-700 rounded-2xl transition-all duration-300 ${
        isOpen
          ? "bg-lime-300 dark:bg-lime-800/50"
          : "bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 h-20"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center text-left p-6"
      >
        <div className="flex items-center">
          <span
            className={`text-2xl font-bold mr-4 ${
              isOpen
                ? "text-slate-900 dark:text-lime-300"
                : "text-slate-400 dark:text-slate-400"
            }`}
          >
            {number}
          </span>
          <h3
            className={`text-lg font-semibold ${
              isOpen
                ? "text-slate-900 dark:text-white"
                : "text-slate-900 dark:text-slate-100"
            }`}
          >
            {title}
          </h3>
        </div>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-600 ${
            isOpen
              ? "bg-white dark:bg-slate-700 transform rotate-180"
              : "bg-slate-100 dark:bg-slate-600"
          }`}
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-slate-900 dark:text-lime-300" />
          ) : (
            <Plus className="w-5 h-5 text-slate-500 dark:text-slate-300" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="p-6 pt-0">
          <div className="border-t border-slate-400 dark:border-slate-600 pt-4">
            <p className="text-slate-700 dark:text-slate-300 text-sm">
              {content}
            </p>
            <div className="flex gap-4 my-4">
              {icons.map((icon,idx) => (
                <SkillIcon key={idx} path={icon.path} text={icon.text} />
                // <img className="w-14" src={path} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
