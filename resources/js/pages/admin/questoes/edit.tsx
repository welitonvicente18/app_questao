import { FaEdit } from "react-icons/fa";
import PageHeader from "@/components/layouts/PageHeader";
import QuestionForm, { QuestionFormData } from "@/components/forms/QuestionForm";
import { usePage } from "@inertiajs/react";

export default function EditQuestionPage() {
  const { id } = usePage().props;

  // Simulação de dados carregados da API refletindo a nova interface
  const initialData: QuestionFormData = {
    name: "Questão Exemplo " + id,
    category: "categoria1",
    nivel: "nivel2",
    options: ["Opção A", "Opção B", "Opção C"],
  };

  const handleEdit = (data: QuestionFormData) => {
    // Aqui virá a chamada para sua API de atualização (PUT/PATCH)
    console.log(`Editando questão ${id}:`, data);
  };

  return (
    <>
      <PageHeader 
        icon={FaEdit} 
        title={`Editar Questão ${id}`} 
      />
      <div className="p-5 flex flex-col gap-6 w-full">
        <QuestionForm
          initialData={initialData}
          onSubmit={handleEdit}
          buttonLabel="Salvar Alterações"
        />
      </div>
    </>
  );
}
