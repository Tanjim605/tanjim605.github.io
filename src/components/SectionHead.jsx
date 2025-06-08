export default function SectionHead({ heading, descriptionText }) {
  return (
    <div className="text-center md:text-left mb-12 flex flex-col md:flex-row">
      <h1 className="text-nowrap text-3xl sm:text-4xl bg-lime-300 px-2 py-1 rounded-md text-slate-900">
        {heading}
      </h1>
      <p className="text-slate-600 dark:text-slate-300 text-lg mx-4 content-center">
        {descriptionText}
      </p>
    </div>
  );
}
