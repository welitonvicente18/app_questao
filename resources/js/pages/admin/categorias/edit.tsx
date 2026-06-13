import { usePage } from '@inertiajs/react';
import { FaEdit } from "react-icons/fa";
import PageHeader from "@/components/layouts/PageHeader";
import CategoryForm, { CategoryFormData } from "@/components/forms/CategoryForm";

export default function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
   const { id } = usePage().props;

  // Simulação de dados carregados da API
  const initialData: CategoryFormData = {
    name: "Categoria Exemplo " + id,
    description: "Descrição carregada da categoria",
  };

  const handleEdit = (data: CategoryFormData) => {
    // Aqui virá a chamada para sua API de atualização (PUT/PATCH)
    console.log(`Editando categoria ${id}:`, data);
  };

  return (
    <>
      <PageHeader
        icon={FaEdit}
        title={`Editar Categoria ${id}`}
      />
      <div className="p-10 flex flex-col gap-6 w-full">
        <CategoryForm
          initialData={initialData}
          onSubmit={handleEdit}
          buttonLabel="Salvar Alterações"
        />
      </div>
    </>
  );
}
