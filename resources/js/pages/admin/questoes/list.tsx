import { ChangeEvent, useState, FormEvent } from "react";
import { GiBookmark } from "react-icons/gi";
import { Link, router } from "@inertiajs/react";
import { TbEdit, TbTrash } from "react-icons/tb";
import PageHeader from "@/components/layouts/PageHeader";
import {
  TableHeader,
  TableBody,
  Table,
  TableTh,
  TableTd,
} from "@/components/table";
import Input from "@/components/Input";

export default function QuestionPage() {
  const [formSearch, setFormSearch] = useState({ name: "" });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormSearch((prev) => ({ ...prev, [name]: value }));
  }

  const questions = [
    {
      id: 1,
      name: "Matemática",
      description: "Descrição da matéria de Matemática",
    },
    {
      id: 2,
      name: "Português",
      description: "Descrição da matéria de Matemática",
    },
    {
      id: 3,
      name: "Ciências",
      description: "Descrição da matéria de Matemática",
    },
  ];

  return (
    <>
      <PageHeader
        icon={GiBookmark}
        title="Questões"
        createRoute="/admin/questoes/create"
        createLabel="Nova Questão"
      />
      <div className="w-full px-6 py-5">
        <form>
          <div className="flex flex-row justify-between items-center gap-3">
            <div className="w-full">
              <select
                name="categoria"
                className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <option>Todas Categorias</option>
                <option>Matemática</option>
                <option>Português</option>
                <option>Ciências</option>
              </select>
            </div>
            <div className="w-full">
              <select
                name="nivel"
                className="w-full border border-slate-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <option>Todos Níveis</option>
                <option>Matemática</option>
                <option>Português</option>
                <option>Ciências</option>
              </select>
            </div>
            <div className="w-full">
              <Input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                placeholder="Pesquisar"
                value={formSearch.name}
                class="w-full"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="p-5 flex flex-col gap-6 w-full">
        <section className="flex flex-row w-full">
          <Table>
            <TableHeader>
              <tr>
                <TableTh>Questões</TableTh>
                <TableTh>Categoria</TableTh>
                <TableTh>Nível</TableTh>
                <TableTh className="text-center">Ações</TableTh>
              </tr>
            </TableHeader>
            <TableBody>
              {questions.map((question) => (
                <tr key={question.id}>
                  <TableTd>
                    <p className="font-semibold">{question.name}</p>
                    <div className="flex gap-1 items-center italic text-slate-400">
                      {question.description}
                    </div>
                  </TableTd>
                   <TableTd></TableTd>
                   <TableTd></TableTd>
                  <TableTd>
                    <div className="flex items-center justify-around">
                      <Link
                        href={`/admin/questoes/edit/${question.id}`}
                        className="hover:text-slate-900 bg-slate-100 p-1 rounded-lg"
                      >
                        <TbEdit size={25} />
                      </Link>
                      <Link
                        href={`/admin/questoes/delete/${question.id}`}
                        className="hover:text-red-900 bg-slate-100 p-1 rounded-lg"
                      >
                        <TbTrash
                          size={25}
                          className="text-red-600"
                          title="Excluir Categoria"
                        />
                      </Link>
                    </div>
                  </TableTd>
                </tr>
              ))}
            </TableBody>
          </Table>
        </section>
      </div>
    </>
  );
}
