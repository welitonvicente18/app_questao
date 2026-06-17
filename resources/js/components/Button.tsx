import { Link } from "@inertiajs/react";

type propsButton = {
  createRoute: string;
  createLabel: string;
  icon?: React.ReactNode;
  class?: string;
};

export default function Button(props: propsButton) {
  return (
    <Link
      href={props.createRoute}
      className={`${props.class || ""} bg-brand-gold text-white hover:bg-yellow-600 font-medium py-2 px-4 rounded-md`}
    >
      {props.icon}
      {props.createLabel}
    </Link>
  );
}
