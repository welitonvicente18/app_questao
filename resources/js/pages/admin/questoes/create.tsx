
import { FaPlus } from "react-icons/fa";
import PageHeader from "@/components/layouts/PageHeader";
import QuestionForm, { QuestionFormData } from "@/components/forms/QuestionForm";

export default function CreateQuestionPage() {
  const handleCreate = (data: QuestionFormData) => {
    // Aqui virá a chamada para sua API
    console.log("Criando Questão:", data);
  };

  return (
    <>
      <PageHeader icon={FaPlus} title="Adicionar Questão" />
      <div className="p-5 flex flex-col gap-6 w-full">
        <QuestionForm
          onSubmit={handleCreate}
          buttonLabel="Salvar Questão"
        />
      </div>
    </>
  );
}
