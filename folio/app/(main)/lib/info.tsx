"use client";
export const name = "Kamsi Orazulike";
export const ann = '"kam-see"';
export const role = "Product Designer";

export const skillList = () => {
  const contact = [
    {
      icon: (
        <img
          id="githubLogo"
          src="./static/imgs/gitHub/github-mark.svg"
          alt="gitHub"
          className="m-2 w-9 h-9 bg-gray-300 hover:bg-green-300 transition duration-300 rounded-full border border-gray-300 hover:border-green-300"
        />
      ),
      name: "github",
      href: "https://github.com/kamsiOrazulike",
    },
    {
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
          alt="linkedIn"
          className="m-2 w-9 h-9 transition duration-300 filter grayscale-[0.5] hover:grayscale-0 rounded-md hover:bg-blue-200"
        />
      ),
      name: "linkedIn",
      href: "https://www.linkedin.com/in/kamsiyonnaorazulike",
    },
  ];

  const contactMap = contact.map((contact, key) => (
    <a key={key} href={contact.href} target="_blank">
      {contact.icon}
    </a>
  ));

  return contactMap;
};

export const avatar = () => {
  return (
    <img
      src="./static/imgs/Me.png"
      alt={name}
      className="w-[200px] h-auto mx-auto my-4 dark:bg-slate-800 bg-gray-700 border border-gray-800 hover:scale-105 transition-all duration-500 rounded-full"
    />
  );
};

export const bio = () => {
  return (
    <div className="m-4">
      <p className="text-center text-xs">
        Hi, I'm Kamsi. A first class graduate from Queen Mary University of
        London with 2 years experience as a software developer
      </p>
    </div>
  );
};
