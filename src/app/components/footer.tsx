import {
  PiGithubLogo,
  PiIdentificationBadge,
  PiLinkedinLogo,
} from "react-icons/pi";

import Link from "next/link";

export const Footer = () => {
  return (
    <div className="h-24 w-full bg-indigo-950/80">
      <div className="h-full flex items-center justify-between px-4 mx-auto max-w-5xl text-indigo-50 text-lg font-normal">
        <p>Made with ❤️ by Jean Robertou</p>

        <div className="flex items-center justify-end gap-x-2">
          <Link
            href="https://jeanrobertou.com"
            target="_blank"
            className="flex items-center justify-center"
          >
            <PiIdentificationBadge className="h-8 w-8" />
          </Link>
          <Link
            href="https://github.com/jean1591"
            target="_blank"
            className="flex items-center justify-center"
          >
            <PiGithubLogo className="h-8 w-8" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/robertoujean/"
            target="_blank"
            className="flex items-center justify-center"
          >
            <PiLinkedinLogo className="h-8 w-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};
