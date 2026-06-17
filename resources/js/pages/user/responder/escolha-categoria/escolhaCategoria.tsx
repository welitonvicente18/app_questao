import { IoArrowForwardCircleOutline } from "react-icons/io5";
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
import { GiBookmark } from "react-icons/gi";

export default function QuestionPage() {
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
      <PageHeader icon={GiBookmark} title="Escolhar Categoria" />
      <div className="p-5 flex flex-col gap-6 w-full">
        <section className="flex flex-row w-full">
          <Table>
            <TableBody>
              {questions.map((question) => (
                <tr key={question.id}>
                  <TableTd>
                    <p className="font-semibold">{question.name}</p>
                    <div className="flex gap-1 items-center italic text-slate-400">
                      {question.description}
                    </div>
                  </TableTd>
                  <TableTd>
                    <div className="flex items-center justify-around bg-slate-200 p-1 rounded-lg">
                      001 questões
                    </div>
                  </TableTd>
                  <TableTd>
                    <div className="flex items-center justify-around">
                      <Link
                        href={`/responder/questao/${question.id}`}
                        className="hover:text-brand-gold bg-slate-100 p-1 rounded-lg"
                      >
                        <IoArrowForwardCircleOutline size={25} />
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
