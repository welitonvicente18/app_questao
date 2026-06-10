type TypeProps = {
  type: string;
  name: string;
  value: string;
  id: string;
  placeholder: string;
  class?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: TypeProps) {
  return (
    <input
      type={props.type}
      name={props.name}
      id={props.id}
      value={props.value}
      onChange={props.onChange}
      className={`${props.class || ""} border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400`}
      placeholder={props.placeholder}
    />
  );
}
