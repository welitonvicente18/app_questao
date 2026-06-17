import type { IconType } from "react-icons";
import Button from "@/components/Button";
import { HiArrowNarrowLeft } from "react-icons/hi";

type HeadPageProps = {
  title: string;
  icon: IconType;
  createRoute?: string;
  createLabel?: string;
};

export default function PageHeader({ icon: Icon, ...props }: HeadPageProps) {
  return (
    <section className="p-2 py-3 flex flex-col gap-1 w-full border-b border-slate-300">
      <div className="flex flex-row justify-between items-center w-full p-2 text-black">
        <div className="flex items-center gap-2">
          <Icon size={26} />
          <h1 className="text-2xl font-medium">{props.title}</h1>
        </div>

        <div>
          {props.createRoute && (
            <Button
              createRoute={props.createRoute}
              createLabel={props.createLabel || ""}
            />
          )}
        </div>
      </div>
      {/* <div className="w-full px-2">
        <div
          className="inline-flex flex-row gap-1 items-center cursor-pointer hover:text-sky-800 transition-colors"
          onClick={() => router.back()}
        >
          <HiArrowNarrowLeft />
          <span>voltar</span>
        </div>
      </div> */}
    </section>
  );
}
