"use client";
export const name = "Kamsi Orazulike";
export const role = "Web developer | UI Designer";

export const skillList = () => {
  const contact = [
    {
      icon: (
        <img
          id="githubLogo"
          src="/static/imgs/gitHub/github-mark.svg"
          alt="gitHub"
          className="w-9 h-9 bg-gray-300 hover:bg-green-300 transition duration-300 rounded-full border border-gray-300 hover:border-green-300"
        />
      ),
      name: "github",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="linkedIn"
          className="w-9 h-9 transition duration-300 filter grayscale-[0.5] hover:grayscale-0 rounded-md hover:bg-blue-200"
        />
      ),
      name: "linkedIn",
    },
  ];

  const contactMap = contact.map((contact, key) => (
    <div key={key}>{contact.icon}</div>
  ));

  return contactMap;
};

export const avatar = () => {
  return (
    <img
      src="/static/imgs/Me.png"
      alt={name}
      className="w-[200px] h-auto mx-auto my-4 dark:bg-slate-800 bg-gray-700 border border-gray-800 hover:scale-105 transition-all duration-500 rounded-full"
    />
  );
};

export const bio = () => {
  return (
    <div className="m-4 font-mono">
      <p className="text-black dark:text-white text-xs text-left">
        Hi, I'm Kamsi, <span className="dark:text-white text-black">"kam-see"</span>. A first class graduate from Queen Mary
        University of London with 2 years experience as a software developer
      </p>
      <button className="py-2 mx-auto w-[150px] hover:scale-105 rounded-md font-xs dark:text-slate-400 text-gray-700 text-center transition-all duration-500">
        <a href="/about">Read more</a>
      </button>
      <div className="flex flex-row justify-evenly my-2">{skillList()}</div>
    </div>
  );
};
