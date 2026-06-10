import { ReactNode } from "react";

type layoutProps = {
  quantity?: number;
  title: string;
  children?: ReactNode;
};

export default function Card(props: layoutProps) {
  return (
    <div className="bg-white p-4 border border-brand-gold rounded-lg shadow-sm h-auto w-full flex flex-col gap-6">
      <h1 className="font-semibold text-slate-800">{props.title}</h1>
      {props.children}
    </div>
  );
}
