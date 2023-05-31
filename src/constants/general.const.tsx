import {
  IconBuilding,
  IconDashboard,
  IconMessenger,
  IconPerson,
  IconProfile,
} from "@/components/icons";
import IconStar from "@/components/icons/IconStar";
import { TSidebarLink } from "@/types/general.types";

export const sidebarLinks: TSidebarLink[] = [
  {
    title: "Dashboard",
    icon: <IconDashboard />,
    path: "/",
  },
  {
    title: "Property",
    icon: <IconBuilding />,
    path: "/property",
  },
  {
    title: "Agent",
    icon: <IconPerson />,
    path: "/person",
  },
  {
    title: "Review",
    icon: <IconStar />,
    path: "/review",
  },
  {
    title: "Message",
    icon: <IconMessenger />,
    path: "/mess",
  },
  {
    title: "My Profile",
    icon: <IconProfile />,
    path: "/profile",
  },
];
