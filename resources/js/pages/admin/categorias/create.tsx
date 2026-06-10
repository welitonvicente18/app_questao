"use client";

import { FaPlus } from "react-icons/fa6";
import PageHeader from "@/components/layouts/PageHeader";
import CategoryForm, { CategoryFormData } from "@/components/forms/CategoryForm";

export default function CreateCategoryPage() {
  const handleCreate = (data: CategoryFormData) => {
    // Aqui virá a chamada para sua API
    console.log("Criando categoria:", data);
  };

  return (
    <>
      <PageHeader icon={FaPlus} title="Adicionar Categoria" />
      <div className="p-5 flex flex-col gap-6 w-full">
        <CategoryForm
          onSubmit={handleCreate}
          buttonLabel="Salvar Categoria"
        />
      </div>
    </>
  );
}
