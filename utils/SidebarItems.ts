import {MessageSquare, File, LayoutGrid, BarChart3, Settings, HelpCircle, LucideIcon} from 'lucide-react'



const SideBarItems: {
  Icon: LucideIcon;
  name: string;
  href: string;
}[] = [
  {
    Icon: MessageSquare,
    href: "",
    name: "AI Chat Helper",
  },
  {
    Icon: File,
    href: "",
    name: "Templates",
  },
  {
    Icon: LayoutGrid,
    href: "",
    name: "My Project",
  },
  {
    Icon: BarChart3,
    href: "",
    name: "Statistics",
  },
  {
    Icon: Settings,
    href: "",
    name: "Settings",
  },
  {
    Icon: HelpCircle,
    href: "",
    name: "Updates & FAQ",
  },
];

export default SideBarItems