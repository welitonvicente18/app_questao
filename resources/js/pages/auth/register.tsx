import Input from '@/components/Input';
import { useForm, usePage, Link } from '@inertiajs/react';

export default function RegisterPage() {
    const page = usePage();

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        post('/register');
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-zinc-100">
            <div className="grid h-full w-full grid-cols-1 md:grid-cols-2">
                <div className="hidden items-center justify-center text-white md:flex">
                    <img
                        src="/img/register.png"
                        alt="register"
                        className="h-96 w-96"
                    />
                </div>
                <div className="flex items-center justify-center">
                    <div className="min-h-[70vh] w-[80%] max-w-md rounded-lg bg-white p-5 shadow-xl">
                        <h1 className="mt-5 text-center text-2xl font-bold">
                            Criar Conta
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="my-5 flex flex-col gap-3">
                                <Input
                                    label="Nome"
                                    type="text"
                                    value={data.name}
                                    onChange={(e) =>
                                        setData('name', e.target.value)
                                    }
                                    placeholder="Seu nome completo"
                                    error={errors.name}
                                />

                                <Input
                                    label="E-mail"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    placeholder="seu@email.com"
                                    error={errors.email}
                                />

                                <Input
                                    label="Senha"
                                    type="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData('password', e.target.value)
                                    }
                                    placeholder="Senha"
                                    error={errors.password}
                                />

                                <Input
                                    label="Confirmar Senha"
                                    type="password"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            'password_confirmation',
                                            e.target.value
                                        )
                                    }
                                    placeholder="Confirmar Senha"
                                    error={errors.password_confirmation}
                                />
                            </div>
                            <div className="my-5">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="w-full rounded-md bg-sky-900 py-2 text-white transition duration-300 hover:bg-sky-700 disabled:opacity-50 cursor-pointer"
                                >
                                    {processing
                                        ? 'Cadastrando...'
                                        : 'Cadastrar Conta'}
                                </button>
                            </div>
                            <div className="my-5 text-center">
                                <p className="text-sm text-gray-900">
                                    Já tem uma conta?
                                    <Link
                                        href="/login"
                                        className="cursor-pointer text-sky-900 ml-1 font-semibold"
                                    >
                                        Entrar
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
