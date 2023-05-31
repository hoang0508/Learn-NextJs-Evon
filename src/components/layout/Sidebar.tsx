import Link from "next/link";
import React from "react";
import { sidebarLinks } from "@/constants/general.const";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const { pathname } = router;
  return (
    <div className="bg-grayfc px-4 py-6">
      {sidebarLinks.map((link) => (
        <Link
          href={link.path}
          key={link.title}
          className={`py-4 px-6 rounded-xl flex items-center gap-x-c10 text-base font-bold text-gray80 ${
            pathname === link.path
              ? "bg-primary text-white"
              : "hover:text-primary"
          }`}
        >
          <span>{link.icon}</span>
          <span>{link.title}</span>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;
