import { FormEvent } from 'react';
import Input from '@/components/Input';
import { useForm } from '@inertiajs/react';

interface CategoryData {
    id?: number;
    name: string;
    description: string;
}

interface CategoryFormProps {
    category?: CategoryData;
    buttonLabel: string;
}

export default function CategoryForm({
    category,
    buttonLabel,
}: CategoryFormProps) {
    const { data, setData, post, put, processing, errors } = useForm({
        name: category?.name || '',
        description: category?.description || '',
    });

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        if (category?.id) {
            // Edição usa PUT (ou POST se preferir, mas PUT é o padrão REST para update total)
            put('/admin/categorias/atualizar/' + category.id);
        } else {
            // Criação
            post('/admin/categorias/salvar');
        }
    }

    return (
        <section className="w-full overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <Input
                            label="Nome da Categoria"
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Digite o nome da categoria"
                        />
                        {errors.name && (
                            <span className="text-xs text-red-500">
                                {errors.name}
                            </span>
                        )}
                    </div>

                    <div className="flex flex-col gap-1">
                        <Input
                            label="Descrição"
                            type="text"
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={(e) =>
                                setData('description', e.target.value)
                            }
                            placeholder="Digite a descrição da categoria"
                        />
                        {errors.description && (
                            <span className="text-xs text-red-500">
                                {errors.description}
                            </span>
                        )}
                    </div>
                </div>
                <div className="mt-4 flex justify-end">
                    <button
                        type="submit"
                        disabled={processing}
                        className="cursor-pointer rounded-md bg-brand-gold px-8 py-2 font-semibold text-white transition-colors hover:bg-yellow-600 disabled:opacity-50"
                    >
                        {processing ? 'Enviando...' : buttonLabel}
                    </button>
                </div>
            </form>
        </section>
    );
}
