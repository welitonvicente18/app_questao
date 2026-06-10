import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="w-screen h-screen bg-zinc-100 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full h-full">
        <div className="hidden md:flex items-center justify-center text-white">
          <img
            src="/img/register.png"
            alt="register"
            className="w-26 h-26"
          />
        </div>

        <div className="flex items-center justify-center ">
          <div className="w-[80%] max-w-md min-h-[70vh] bg-white rounded-lg shadow-xl p-5">
            <h1 className="text-2xl font-bold text-center mt-5">
              Criar Conta
            </h1>
            <div className="my-5 flex flex-col gap-2">
              <label>Nome</label>
              <input
                type="text"
                placeholder="Seu nome completo"
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
              <label>E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
              <label>Senha</label>
              <input
                type="password"
                placeholder="Senha"
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
              <label>Confirmar Senha</label>
              <input
                type="password"
                placeholder="Confirmar Senha"
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-sky-600"
              />
            </div>
            <div className="my-5">
              <button className="w-full bg-sky-900 text-white py-2 rounded-md transition duration-300 hover:bg-sky-700">
                Cadastrar Conta
              </button>
            </div>
            <div className="my-5 text-center">
              <p className="text-sm text-gray-900">
                Não tem uma conta?
                <Link href="/login" className="text-sky-900 cursor-pointer">
                  Entrar
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
