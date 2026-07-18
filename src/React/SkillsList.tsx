import React, { useState } from "react";

const CategoryIcons: Record<string, React.ReactNode> = {
  "Network Administration": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "Web Development": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M7 4V20H17V4H7ZM6 2H18C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2ZM12 17C12.5523 17 13 17.4477 13 18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18C11 17.4477 11.4477 17 12 17Z"></path>
    </svg>
  ),
  "Software & Databases": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
      <path d="M5.7646 7.99998L5.46944 7.26944C5.26255 6.75737 5.50995 6.17454 6.02202 5.96765L15.2939 2.22158C15.8059 2.01469 16.3888 2.26209 16.5956 2.77416L22.2147 16.6819C22.4216 17.194 22.1742 17.7768 21.6622 17.9837L12.3903 21.7298C11.8783 21.9367 11.2954 21.6893 11.0885 21.1772L11.0002 20.9586V21H7.00021C6.44792 21 6.00021 20.5523 6.00021 20V19.7303L2.65056 18.377C2.13849 18.1701 1.89109 17.5873 2.09798 17.0752L5.7646 7.99998ZM8.00021 19H10.2089L8.00021 13.5333V19ZM6.00021 12.7558L4.32696 16.8972L6.00021 17.6084V12.7558ZM7.69842 7.44741L12.5683 19.5008L19.9858 16.5039L15.1159 4.45055L7.69842 7.44741ZM10.6766 9.47974C10.1645 9.68663 9.5817 9.43924 9.37481 8.92717C9.16792 8.4151 9.41532 7.83227 9.92739 7.62538C10.4395 7.41849 11.0223 7.66588 11.2292 8.17795C11.4361 8.69002 11.1887 9.27286 10.6766 9.47974Z"></path>
    </svg>
  ),
};

const skills: Record<string, string[]> = {
  "Network Administration": [
    "Cisco Packet Tracer labs & simulations",
    "Basic network configuration & administration",
    "Linux system administration",
  ],
  "Web Development": [
    "Full-stack web apps with Node.js & Express",
    "Frontend with HTML, CSS & JavaScript",
    "REST APIs & backend services",
  ],
  "Software & Databases": [
    "Programming in Python, C# & PHP",
    "Databases with Supabase (PostgreSQL) & SQL",
    "Cross-platform apps with Flutter",
  ],
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(
    "Network Administration"
  );

  const toggleItem = (item: string) =>
    setOpenItem(openItem === item ? null : item);

  return (
    <ul className="w-full space-y-4">
      {Object.entries(skills).map(([category, items], i) => {
        const open = openItem === category;
        return (
          <li key={category}>
            <div
              className={`hud-brackets border-2 bg-paper transition-all ${
                open
                  ? "border-accent shadow-hard"
                  : "border-line hover:border-accent hover:shadow-hard-sm"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleItem(category)}
                aria-expanded={open}
                className="flex w-full items-center gap-4 px-5 py-4 text-left"
              >
                <span className="font-mono text-sm font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-accent">{CategoryIcons[category]}</span>
                <span className="flex-grow font-mono text-sm font-bold uppercase tracking-wide md:text-base">
                  {category}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`h-5 w-5 shrink-0 transition-transform ${
                    open ? "rotate-180 text-accent" : "text-ink"
                  }`}
                >
                  <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                </svg>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <ul className="space-y-2 border-t-2 border-line px-5 py-4 font-mono text-sm text-ink/80">
                    {items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="text-accent">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default SkillsList;
