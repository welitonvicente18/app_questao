import { BsGraphUp } from "react-icons/bs";
import PageHeader from "@/components/layouts/PageHeader";
import Card from "@/components/Card";
import { Table, TableHeader, TableBody, TableTh, TableTd } from "@/components/table";

export default function PerformancePage() {
  const performanceByCategory = [
    { category: "Matemática", total: 50, correct: 35, percentage: "70%" },
    { category: "Português", total: 40, correct: 32, percentage: "80%" },
    { category: "Ciências", total: 30, correct: 15, percentage: "50%" },
  ];

  return (
    <>
      <PageHeader icon={BsGraphUp} title="Meu Desempenho" />
      <div className="p-5 flex flex-col gap-6 w-full">
        {/* Sumário de Estatísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <Card title="Precisão Geral">
            <div className="text-4xl font-bold text-brand-gold">67.5%</div>
            <p className="text-sm text-slate-500">Média de todas as categorias</p>
          </Card>
          <Card title="Questões Resolvidas">
            <div className="text-4xl font-bold text-slate-800">120</div>
            <p className="text-sm text-slate-500">Últimos 30 dias</p>
          </Card>
          <Card title="Ranking Global">
            <div className="text-4xl font-bold text-blue-600">#124</div>
            <p className="text-sm text-slate-500">Entre 5.000 alunos</p>
          </Card>
        </div>

        {/* Detalhamento por Categoria */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-800 mb-4">Desempenho por Categoria</h2>
          <Table>
            <TableHeader>
              <tr>
                <TableTh>Categoria</TableTh>
                <TableTh className="text-center">Total</TableTh>
                <TableTh className="text-center">Acertos</TableTh>
                <TableTh className="text-center">Aproveitamento</TableTh>
              </tr>
            </TableHeader>
            <TableBody>
              {performanceByCategory.map((item, index) => (
                <tr key={index} className="border-b border-slate-100 hover:bg-slate-50">
                  <TableTd className="font-medium text-slate-700">{item.category}</TableTd>
                  <TableTd className="text-center">{item.total}</TableTd>
                  <TableTd className="text-center text-green-600 font-semibold">{item.correct}</TableTd>
                  <TableTd className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-24 bg-slate-100 rounded-full h-2 overflow-hidden hidden md:block">
                        <div 
                          className="bg-brand-gold h-full" 
                          style={{ width: item.percentage }}
                        ></div>
                      </div>
                      <span className="font-bold">{item.percentage}</span>
                    </div>
                  </TableTd>
                </tr>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Atividade Recente */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <h2 className="font-semibold text-slate-800 mb-4">Evolução Semanal</h2>
            <div className="h-48 flex items-center justify-center text-slate-400 italic bg-slate-50 rounded border border-dashed border-slate-300">
              [Gráfico de Evolução]
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
            <h2 className="font-semibold text-slate-800 mb-4">Pontos Fortes e Fracos</h2>
            <ul className="flex flex-col gap-3">
              <li className="flex justify-between items-center">
                <span className="text-slate-600">Melhor Categoria:</span>
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-bold uppercase">Português</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-slate-600">Precisa de Atenção:</span>
                <span className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs font-bold uppercase">Ciências</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
