import Input from '@/components/Input';
import { useForm, usePage, Link } from '@inertiajs/react';

export default function LoginPage() {
    const page = usePage();
    console.log('Page Props:', page.props);

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        post('/login');
    }

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-slate-900">
            <div className="grid h-full w-full grid-cols-2">
                <div className="hidden items-center justify-center text-white md:flex">
                    <div className="">
                        <h1 className="text-4xl">Questione</h1>
                        <h2 className="text-3xl">Plataforma de questões</h2>
                        <p className="mt-4 text-lg">
                            Pratique, evolua e conquiste seus objetivos
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center">
                    <div className="min-h-[55vh] w-[80%] max-w-md rounded-lg bg-white p-5 shadow-xl">
                        <h1 className="mt-5 text-center text-2xl font-bold">
                            Entrar na conta
                        </h1>
                        <form onSubmit={handleSubmit}>
                            <div className="my-5 flex flex-col gap-4">
                                <Input
                                    label="E-mail"
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData('email', e.target.value)
                                    }
                                    placeholder="seu@email.com"
                                    error={errors.email}
                                    autoComplete="email"
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
                                    autoComplete="current-password"
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="my-5">
                                    <label
                                        htmlFor="remember"
                                        className="text-sm cursor-pointer select-none"
                                    >
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            checked={data.remember}
                                            onChange={(e) =>
                                                setData(
                                                    'remember',
                                                    e.target.checked
                                                )
                                            }
                                            className="mr-2"
                                        />
                                        Lembrar-me
                                    </label>
                                </div>
                                <div className="my-5">
                                    <a
                                        href="#"
                                        className="cursor-pointer text-sm text-slate-900"
                                    >
                                        Esqueci minha senha
                                    </a>
                                </div>
                            </div>
                            <div className="my-5">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="cursor-pointer w-full rounded-md bg-slate-900 py-2 text-white transition duration-300 hover:bg-slate-700 disabled:opacity-50"
                                >
                                    {processing ? 'Entrando...' : 'Entrar'}
                                </button>
                            </div>
                        </form>
                        <div className="my-5 text-center">
                            <p className="text-sm text-gray-900">
                                Não tem uma conta?
                                <Link
                                    href="/register"
                                    className="cursor-pointer text-slate-900 ml-1 font-semibold"
                                >
                                    Cadastre-se
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
