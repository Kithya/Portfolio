import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo2_dark : assets.logo2}
          alt=""
          className="w-36 mx-auto mb-2"
        />
        <div className="flex items-center gap-2 mx-auto w-max">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          narakithya@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p className="">
          © {new Date().getFullYear()} Nara Ratanakkithya. All rights reserved.
        </p>
        <ul className="flex items-center gap-10 mt-4 sm:mt-0 hover:underline">
          <li>
            <a target="_blank" href="https://github.com/Kithya">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.facebook.com/kithya.mrr/">
              Facebook
            </a>
          </li>
          <li>
            <a target="_blank" href="https://t.me/Kithyanara">
              Telegram
            </a>
          </li>
          <li>
            <a target="_blank" href="mailto:narakithya@gmail.com">
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
