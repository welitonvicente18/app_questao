"use client";

import { ChangeEvent, useState, FormEvent } from "react";
import Input from "@/components/Input";

export interface CategoryFormData {
  name: string;
  description: string;
}

interface CategoryFormProps {
  initialData?: CategoryFormData;
  onSubmit: (data: CategoryFormData) => void;
  buttonLabel: string;
}

export default function CategoryForm({
  initialData,
  onSubmit,
  buttonLabel,
}: CategoryFormProps) {
  const [form, setForm] = useState<CategoryFormData>(
    initialData || { name: "", description: "" }
  );

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit(form);
  }

  return (
    <section className="w-full overflow-hidden rounded-2xl border border-slate-300 shadow-md bg-white">
      <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-slate-800 font-semibold">
            Nome da Categoria
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Digite o nome da categoria"
          />
          <label htmlFor="description" className="text-slate-800 font-semibold">
            Descrição
          </label>
          <Input
            type="text"
            id="description"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Digite a descrição da categoria"
          />
        </div>
        <button
          type="submit"
          className="bg-brand-gold text-white hover:bg-yellow-600 font-medium py-2 px-4 rounded-md w-full transition-colors"
        >
          {buttonLabel}
        </button>
      </form>
    </section>
  );
}
