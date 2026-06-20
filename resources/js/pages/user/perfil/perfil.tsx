import { IoPerson } from 'react-icons/io5';
import PageHeader from '@/components/layouts/PageHeader';
import Input from '@/components/Input';
import { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';

type PageProps = {
    user: {
        id: number;
        name: string;
        email: string;
        is_admin: number;
    };
    flash: {
        success: string | null;
        error: string | null;
    };
};

export default function ProfilePage() {
    const { user, flash } = usePage<PageProps>().props;

    const { data, setData, post, processing, errors } = useForm({
        name: user.name,
        email: user.email,
        password: '',
    });

    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    }, [flash.success]);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        post('/arena/perfil');
    }

    return (
        <>
            <ToastContainer />
            <PageHeader icon={IoPerson} title="Meu Perfil" />
            <section className="flex w-full flex-col gap-6 p-5">
                <div className="flex flex-col gap-8 rounded-lg border border-slate-200 bg-white p-8 shadow-sm md:flex-row">
                    <div className="flex flex-col items-center gap-4">
                        <div className="flex h-32 w-32 items-center justify-center rounded-full border-4 border-brand-gold bg-slate-200 text-4xl font-bold text-slate-500">
                            {user.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')
                                .toUpperCase()}
                        </div>
                        <button className="text-sm font-semibold text-brand-gold hover:underline">
                            Alterar Foto
                        </button>
                    </div>
                    <form
                        className="flex flex-1 flex-col gap-5"
                        onSubmit={handleSubmit}
                    >
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <Input
                                    type="text"
                                    label="Nome Completo"
                                    name="name"
                                    id="name"
                                    value={data.name}
                                    placeholder="Seu nome"
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                />
                                {errors.name && (
                                    <span className="text-xs text-red-500">
                                        {errors.name}
                                    </span>
                                )}
                            </div>
                            <div className="flex flex-col gap-2">
                                <Input
                                    type="email"
                                    label="E-mail"
                                    name="email"
                                    id="email"
                                    value={data.email}
                                    placeholder="Seu e-mail"
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                />
                                {errors.email && (
                                    <span className="text-xs text-red-500">
                                        {errors.email}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">
                                    Tipo de Usuário
                                </label>
                                <select
                                    className={`w-full rounded-md border border-gray-300 px-4 py-2 transition duration-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-400 focus:outline-none ${user.is_admin === 0 ? 'bg-slate-200' : ''}`}
                                    disabled={true}
                                    defaultValue={
                                        user.is_admin === 1 ? '1' : '0'
                                    }
                                >
                                    <option value="0">Usuário</option>
                                    <option value="1">Administrador</option>
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-semibold text-slate-700">
                                    Nova Senha
                                </label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={data.password}
                                    placeholder="Deixe em branco para não alterar"
                                    className="mb-0"
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                />
                                {errors.password && (
                                    <span className="text-xs text-red-500">
                                        {errors.password}
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
                                {processing
                                    ? 'Salvando...'
                                    : 'Salvar Alterações'}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
