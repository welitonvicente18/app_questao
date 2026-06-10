import { ReactNode } from "react";

type layoutProps = {
  children?: ReactNode;
};
export default function Table(props: layoutProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-slate-300 shadow-md">
          <table className="w-full text-left">
      {props.children}
      </table>
    </div>
  );
}
