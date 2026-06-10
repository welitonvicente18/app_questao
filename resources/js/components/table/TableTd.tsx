import { ReactNode } from "react";

type layoutProps = {
  className?: string;
  children?: ReactNode;
};
export default function TableTd(props: layoutProps) {
  return  <td className={`${props.className || ""} px-6 py-5`}>{props.children}</td>;
}
