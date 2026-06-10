"use client";

import PageHeader from "@/components/layouts/PageHeader";
import { IoStatsChart } from "react-icons/io5";
import Card from "@/components/Card";

export default function AdminDashboardPage() {
  return (
    <>
      <PageHeader icon={IoStatsChart} title="Painel Administrativo" />
      <div className="p-5 flex flex-col gap-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card title="Total de Alunos">
            <div className="text-3xl font-bold text-slate-800">1.240</div>
            <p className="text-sm text-green-600">+12% este mês</p>
          </Card>
          <Card title="Questões Ativas">
            <div className="text-3xl font-bold text-slate-800">450</div>
            <p className="text-sm text-slate-500">Em 12 categorias</p>
          </Card>
          <Card title="Respostas Hoje">
            <div className="text-3xl font-bold text-slate-800">8.920</div>
            <p className="text-sm text-blue-600">Pico às 14:00</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm h-80 flex flex-col gap-4">
            <h2 className="font-semibold text-slate-800">Categorias mais acessadas</h2>
            <div className="flex-1 flex items-center justify-center text-slate-400 italic">
              Gráfico de pizza aqui
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm h-80 flex flex-col gap-4">
            <h2 className="font-semibold text-slate-800">Novos usuários (últimos 7 dias)</h2>
            <div className="flex-1 flex items-center justify-center text-slate-400 italic">
              Gráfico de linha aqui
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
