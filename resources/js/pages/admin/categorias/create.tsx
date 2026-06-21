import { FaPlus } from 'react-icons/fa6';
import PageHeader from '@/components/layouts/PageHeader';
import CategoryForm from '@/components/forms/CategoryForm';

export default function CreateCategoryPage() {
    return (
        <>
            <PageHeader icon={FaPlus} title="Adicionar Categoria" />
            <div className="flex w-full flex-col gap-6 p-10">
                <CategoryForm
                    buttonLabel="Salvar Categoria"
                />
            </div>
        </>
    );
}
