export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer className="bg-slate-200 text-center dark:bg-slate-700 lg:text-left">
        <p className="p-4 md:text-sm text-xs text-center text-neutral-700 dark:text-neutral-200">
          {`Copyright © Portfolio ${year} - `}
          Kamsi Orazulike
        </p>
      </footer>
    </>
  );
}
