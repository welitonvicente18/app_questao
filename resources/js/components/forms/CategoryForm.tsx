import { ChangeEvent, useState, FormEvent } from 'react';
import Input from '@/components/Input';
import { CategoryFormData, CategoryFormProps } from './CategoryFormInterface';

export type { CategoryFormData, CategoryFormProps };

export default function CategoryForm({
    initialData,
    onSubmit,
    buttonLabel,
}: CategoryFormProps) {
    const [form, setForm] = useState<CategoryFormData>(
        initialData || { name: '', description: '' },
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
        <section className="w-full overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-md">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-6">
                <div className="flex flex-col gap-3">
                    <label
                        htmlFor="name"
                        className="font-semibold text-slate-800"
                    >
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
                    <label
                        htmlFor="description"
                        className="font-semibold text-slate-800"
                    >
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
                    className="w-full rounded-md bg-brand-gold px-4 py-2 font-medium text-white transition-colors hover:bg-yellow-600"
                >
                    {buttonLabel}
                </button>
            </form>
        </section>
    );
}
