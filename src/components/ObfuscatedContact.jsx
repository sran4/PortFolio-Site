import React from "react";
import { IoMdMail } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";

const ObfuscatedEmail = () => {
  return (
    <div className="flex items-center gap-5 bg-orange-50 dark:bg-white/10 rounded border border-orange-100 dark:border-white/10 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-white flex items-center justify-center bg-gradient-primary rounded-lg">
        <IoMdMail />
      </div>
      <div className="text-secondary text-xs md:text-sm">
        <span>sransatwant</span>
        <span className="hidden">not-email</span>
        <span>@</span>
        <span className="hidden">spam-block</span>
        <span>gmail.com</span>
      </div>
    </div>
  );
};

const ObfuscatedPhone = () => {
  return (
    <div className="flex items-center gap-5 bg-orange-50 dark:bg-white/10 rounded border border-orange-100 dark:border-white/10 px-4 py-3 mb-5">
      <div className="w-10 h-10 text-xl text-white flex items-center justify-center bg-gradient-primary rounded-lg">
        <IoPhonePortraitOutline />
      </div>
      <div className="text-secondary text-xs md:text-sm">
        <span>(408) 561-0966</span>
        <span className="hidden">not-phone</span>
      </div>
    </div>
  );
};

export { ObfuscatedEmail, ObfuscatedPhone };
