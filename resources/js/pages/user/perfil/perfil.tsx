"use client";

import { IoPerson } from "react-icons/io5";
import PageHeader from "@/components/layouts/PageHeader";
import Input from "@/components/Input";
import { useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Weliton",
    email: "weliton@exemplo.com",
    role: "Estudante",
  });

  return (
    <>
      <PageHeader icon={IoPerson} title="Meu Perfil" />
      <div className="p-5 flex flex-col gap-6 w-full max-w-4xl">
        <div className="bg-white p-8 rounded-lg border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
          <div className="flex flex-col items-center gap-4">
            <div className="w-32 h-32 rounded-full bg-slate-200 flex items-center justify-center text-4xl font-bold text-slate-500 border-4 border-brand-gold">
              W
            </div>
            <button className="text-sm text-brand-gold font-semibold hover:underline">
              Alterar Foto
            </button>
          </div>

          <form className="flex-1 flex flex-col gap-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Nome Completo</label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  value={user.name}
                  placeholder="Seu nome"
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">E-mail</label>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  value={user.email}
                  placeholder="Seu e-mail"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-slate-700">Tipo de Conta</label>
              <div className="p-2 bg-slate-50 border border-slate-200 rounded-md text-slate-500">
                {user.role}
              </div>
            </div>

            <hr className="my-2" />

            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-slate-800">Segurança</h3>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-slate-700">Nova Senha</label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  value=""
                  placeholder="Deixe em branco para não alterar"
                />
              </div>
            </div>

            <div className="mt-4 flex justify-end">
              <button className="bg-brand-dark text-white px-6 py-2 rounded-md font-semibold hover:bg-slate-800 transition-colors">
                Salvar Alterações
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
