import { ReactNode } from "react";

type layoutProps = {
  children?: ReactNode;
};
export default function TableBody(props: layoutProps) {
  return (
    <tbody className="text-slate-500 border-brand-gold">
      {props.children}
    </tbody>
  );
}
