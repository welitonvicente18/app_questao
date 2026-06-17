import type { IconType } from "react-icons";
import { Link } from "@inertiajs/react";

interface SlideBarLiProps {
  icon: IconType;
  label: string;
  href: string;
}

export default function SlideBarLi({ icon: Icon, label, href }: SlideBarLiProps) {
  return (
    <li className="w-full">
      <Link
        href={href}
        className="flex items-center gap-4 p-2 rounded-lg hover:bg-brand-gold cursor-pointer w-full"
      >
        <Icon size={18} />
        <span className="text-md">{label}</span>
      </Link>
    </li>
  );
}

