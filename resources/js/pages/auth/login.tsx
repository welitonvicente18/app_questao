import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="w-screen h-screen bg-slate-900 flex items-center justify-center">
      <div className="grid grid-cols-2 w-full h-full">
        <div className="hidden md:flex items-center justify-center text-white">
          <div className="">
            {/* <img src="./logo.png" alt="Logo" className="w-16 h-16" /> */}
            <h1 className="text-4xl">Questione</h1>
            <h2 className="text-3xl">Plataforma de questões</h2>
            <p className="text-lg mt-4">
              Pratique, evolua e conquiste seus objetivos
            </p>

            {/* <img src="./logo.png" alt="Logo" className="w-16 h-16" /> */}
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <div className="w-[80%] max-w-md min-h-[55vh] bg-white rounded-lg shadow-xl p-5">
            <h1 className="text-2xl font-bold text-center mt-5">
              Entrar na conta
            </h1>
            <div className="my-5 flex flex-col gap-2">
              <label>E-mail</label>
              <input
                type="email"
                placeholder="seu@email.com"
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
              <label>Senha</label>
              <input
                type="password"
                placeholder="Senha"
                className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-slate-500"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="my-5">
                <label htmlFor="remember" className="text-sm">
                  <input type="checkbox" id="remember" className="mr-2" />
                  Lembrar-me
                </label>
              </div>
              <div className="my-5">
                <a href="#" className="text-sm text-slate-900 cursor-pointer">
                  Esqueci minha senha
                </a>
              </div>
            </div>
            <div className="my-5">
              <button className="w-full bg-slate-900 text-white py-2 rounded-md transition duration-300 hover:bg-slate-700">
                Entrar
              </button>
            </div>
            <div className="my-5 text-center">
              <p className="text-sm text-gray-900">
                Não tem uma conta?
                <Link href="/register" className="text-slate-900 cursor-pointer">
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
