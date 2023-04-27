import { skillList } from "./lib/info";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        id="contact"
        className="bg-slate-200 text-center dark:bg-slate-700 lg:text-left"
      >
        <div className="flex flex-row align-middle items-center justify-between">
          <p className="p-4 md:text-sm text-xs text-center text-neutral-700 dark:text-neutral-200">
            {`Copyright © Portfolio ${year} - `}
            Kamsi Orazulike
          </p>
          <div className="flex flex-row justify-center px-4">{skillList()}</div>
        </div>
      </footer>
    </>
  );
}
