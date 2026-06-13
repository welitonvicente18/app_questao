import PageHeader from "@/components/layouts/PageHeader";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import { BiCategory } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";
import {IoIosArrowDroprightCircle, IoIosArrowRoundForward} from "react-icons/io";

import {
  TableHeader,
  TableBody,
  Table,
  TableTh,
  TableTd,
} from "@/components/table";

export default function CategoryPage() {
  const categories = [
    {
      id: 1,
      name: "Matemática",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
      questions: 10,
    },
    {
      id: 2,
      name: "Português",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
      questions: 8,
    },
    {
      id: 3,
      name: "Ciências",
      description:
        "Mussum Ipsum, cacilds vidis litro abertis. Mauris nec dolor in eros commodo tempor.",
      questions: 12,
    },
  ];

  return (
    <>
      <PageHeader
        icon={BiCategory}
        title="Categoria"
        createRoute="/admin/categorias/create"
        createLabel="Nova Categoria"
      />
      <div className="p-10 flex flex-col gap-6 w-full">
        <section className="flex flex-row w-full">
          <Table>
            <TableHeader>
              <tr>
                <TableTh>Categoria</TableTh>
                <TableTh className="text-center">Ações</TableTh>
              </tr>
            </TableHeader>
            <TableBody>
              {categories.map((category) => (
                <tr
                  key={category.id}
                  className="border-b border-slate-300 hover:bg-slate-200 transition "
                >
                  <TableTd>
                    <p className="font-semibold">{category.name}</p>
                    <div className="flex gap-1 items-center italic text-slate-400">
                      <IoIosArrowRoundForward /> {category.description}
                    </div>
                  </TableTd>
                  <TableTd className="flex items-center justify-around">
                    <Link
                      href={`/admin/categorias/edit/${category.id}`}
                      className="hover:text-slate-900 bg-slate-100 p-1 rounded-lg"
                    >
                      <TbEdit size={25} />
                    </Link>
                    <Link
                      href={`/admin/categorias/delete/${category.id}`}
                      className="hover:text-red-900 bg-slate-100 p-1 rounded-lg"
                    >
                      <TbTrash
                        size={25}
                        className="text-red-600"
                        title="Excluir Categoria"
                      />
                    </Link>
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
