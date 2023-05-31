import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IconNotifation, IconSearch } from "../icons";

const Topbar = () => {
  return (
    <div className="px-5 py-4 bg-grayfc flex items-center justify-between">
      <div className="flex items-center gap-x-[82px] flex-1">
        <Link href={"/"} className="flex items-center gap-x-3">
          <Image src="/logo-full.png" alt="logo" width={173} height={35} />
        </Link>
        <div className="h-[38px] px-[10px] rounded-lg bg-grayf4 flex items-center gap-x-2 flex-[0_1_405px]">
          <IconSearch />
          <input
            type="text"
            placeholder="Search Property, Customer etc"
            className="placeholder:text-gray80 text-primaryText text-xs font-normal bg-transparent w-full outline-none"
          />
        </div>
      </div>
      <div className="flex items-center gap-x-5 flex- shrink-0">
        <span className="flex-shrink-0">
          <IconNotifation />
        </span>
        <div className="flex items-center gap-x-[10px] flex-shrink-0">
          <Image
            src="https://images.unsplash.com/photo-1661956601030-fdfb9c7e9e2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt="avatar"
            width={40}
            height={40}
            className="w-10 h-10 object-cover rounded-full"
          />
          <div className="flex flex-col">
            <h4 className="font-semibold">Hawkins Maru</h4>
            <span className="text-gray80">Company Manager</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
