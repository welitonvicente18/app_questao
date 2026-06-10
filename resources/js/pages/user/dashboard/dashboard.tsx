"use client";

import { useState } from "react";
import Card from "@/components/Card";

type dataQuantityType = {
  questions_response: number;
  questions_correct: number;
  questions_error: number;
  questions_simulated: number;
};

export default function DashboardPage() {
  const [dataQuantity] = useState<dataQuantityType>({
    questions_response: 5,
    questions_correct: 2,
    questions_error: 3,
    questions_simulated: 4,
  });

  return (
    <div className="p-5 flex flex-col gap-6 w-full">
      <div className="flex flex-col gap-6 w-full">
        <div className="bg-white p-4 border border-brand-gold rounded-lg shadow-sm h-40 w-full flex items-center justify-center">
            <p className="text-slate-400">Área de Destaque</p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <Card
          title="Continue Estudando"
          quantity={dataQuantity.questions_response}
        >
          <h1>Última questão estudada</h1>
          <p className="">001</p>
        </Card>
        <Card
          title="Estatísticas Rápidas"
          quantity={dataQuantity.questions_correct}
        >
          <div className="flex-1">
            <div className="flex justify-between">
              <div>Total Respondidas</div>
              <div>00</div>
            </div>
            <div className="flex justify-between">
              <div>Acertos</div>
              <div>00</div>
            </div>
            <div className="flex justify-between">
              <div>Erros</div>
              <div>00</div>
            </div>
          </div>
        </Card>
        <Card
          title="Próximo Simulados"
          quantity={dataQuantity.questions_simulated}
        >
          <div className="flex-1">
            <div className="flex justify-between">
              <div>21/07 de 2028</div>
            </div>
            <div className="flex justify-between">
              <div>Erros</div>
              <div>00</div>
            </div>
          </div>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-white p-4 border border-brand-gold rounded-lg shadow-sm h-72 w-full flex flex-col gap-6">
          <h1 className="text-slate-800 font-semibold">
            Desempenho por categoria
          </h1>
        </div>
        <div className="bg-white p-4 border border-brand-gold rounded-lg shadow-sm h-72 w-full flex flex-col gap-6">
          <h1 className="text-slate-800 font-semibold">Últimas atividades</h1>
        </div>
      </div>
    </div>
  );
}
