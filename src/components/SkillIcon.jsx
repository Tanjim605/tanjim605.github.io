export default function SkillIcon({ path, text }) {
  return (
    <div>
      <img className="w-14" src={path} />
      <p className="text-stone-800 dark:text-stone-300 font-medium text-base text-center mx-auto mt-2">{text}</p>
    </div>
  );
}
