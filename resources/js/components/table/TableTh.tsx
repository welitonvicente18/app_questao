import { ReactNode } from "react";

type layoutProps = {
  className?: string;
  children?: ReactNode;
};
export default function TableTh(props: layoutProps) {
  return (
    <th className={`${props.className || ""} px-6 py-5 font-medium`}>
      {props.children}
    </th>
  );
}
