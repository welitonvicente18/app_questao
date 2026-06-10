import { ReactNode } from "react";

type layoutProps = {
  children?: ReactNode;
};
export default function TableHeader(props: layoutProps) {
  return (
    <thead className="border-b-2 border-brand-gold text-slate-800">
      {props.children}
    </thead>
  );
}
