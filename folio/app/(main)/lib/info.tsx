"use client";
export const name = "I'm Kamsi";
export const ann = '"kam-see"';
export const role = "IDE program - Imperial College London | Royal College of Art";

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
      className="w-[300px] h-[300px] mx-auto my-4 object-cover border border-white hover:scale-105 transition-all duration-500 rounded-full"
    />
  );
};

export const bio = () => {
  return (
    <div className="w-full my-10 mx-12">
      <div className="w-[90%]">
        <div className="w-full text-left text-gray-200/50 hover:text-white duration-150">
          <div className="mb-1 text-xs font-sm">Figma</div>
          <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
            <div className="h-2 w-[70%] rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="w-full text-left text-gray-200/50 hover:text-white duration-150">
          <div className="mb-1 text-xs">Adobe Illustrator | Procreate</div>
          <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
            <div className="h-2 w-[85%] rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="w-full text-left text-gray-200/50 hover:text-white duration-150">
          <div className="mb-1 text-xs font-sm">JavaScript | TypeScript</div>
          <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
            <div className="h-2 w-[85%] rounded-full bg-green-500"></div>
          </div>
        </div>

        <div className="w-full text-left text-gray-200/50 hover:text-white duration-150">
          <div className="mb-1 text-xs font-sm">React | React Native</div>
          <div className="w-full bg-gray-600 rounded-full h-2 mb-4">
            <div className="h-2 w-[85%] rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
