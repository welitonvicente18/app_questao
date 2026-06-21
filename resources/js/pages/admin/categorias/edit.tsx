import { FaEdit } from "react-icons/fa";
import PageHeader from "@/components/layouts/PageHeader";
import CategoryForm from "@/components/forms/CategoryForm";

interface Props {
    category: {
        id: number;
        name: string;
        description: string;
    };
}

export default function EditCategoryPage({ category }: Props) {
  return (
    <>
      <PageHeader
        icon={FaEdit}
        title={`Editar Categoria: ${category.name}`}
      />
      <div className="p-10 flex flex-col gap-6 w-full">
        <CategoryForm
          category={category}
          buttonLabel="Salvar Alterações"
        />
      </div>
    </>
  );
}
