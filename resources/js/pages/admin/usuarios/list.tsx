
import { IoPeople } from "react-icons/io5";
import { TbEdit, TbTrash } from "react-icons/tb";
import PageHeader from "@/components/layouts/PageHeader";
import { Table, TableHeader, TableBody, TableTh, TableTd } from "@/components/table";
import { Link } from "@inertiajs/react";

export default function UsersPage() {
  const users = [
    { id: 1, name: "Weliton Silva", email: "weliton@exemplo.com", role: "ADMIN", status: "Ativo" },
    { id: 2, name: "Ana Oliveira", email: "ana@exemplo.com", role: "ALUNO", status: "Ativo" },
    { id: 3, name: "Carlos Souza", email: "carlos@exemplo.com", role: "ALUNO", status: "Inativo" },
    { id: 4, name: "Juliana Lima", email: "juliana@exemplo.com", role: "ALUNO", status: "Ativo" },
  ];

  return (
    <>
      <PageHeader 
        icon={IoPeople} 
        title="Gestão de Usuários" 
        createRoute="/admin/usuarios/create" 
        createLabel="Novo Usuário"
      />
      <div className="p-5 flex flex-col gap-6 w-full">
        <section className="flex flex-row w-full">
          <Table>
            <TableHeader>
              <tr>
                <TableTh>Nome</TableTh>
                <TableTh>E-mail</TableTh>
                <TableTh>Perfil</TableTh>
                <TableTh>Status</TableTh>
                <TableTh className="text-center">Ações</TableTh>
              </tr>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-slate-200 hover:bg-slate-50 transition">
                  <TableTd className="font-semibold text-slate-700">{user.name}</TableTd>
                  <TableTd>{user.email}</TableTd>
                  <TableTd>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                      user.role === 'ADMIN' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
                    }`}>
                      {user.role}
                    </span>
                  </TableTd>
                  <TableTd>
                    <span className={`flex items-center gap-1 text-sm ${
                      user.status === 'Ativo' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${
                        user.status === 'Ativo' ? 'bg-green-600' : 'bg-red-600'
                      }`}></span>
                      {user.status}
                    </span>
                  </TableTd>
                  <TableTd>
                    <div className="flex items-center justify-around">
                      <Link
                        href={`/admin/usuarios/edit/${user.id}`}
                        className="hover:text-slate-900 bg-slate-100 p-1 rounded-lg"
                      >
                        <TbEdit size={22} />
                      </Link>
                      <button
                        className="hover:text-red-900 bg-slate-100 p-1 rounded-lg text-red-600"
                        title="Desativar Usuário"
                      >
                        <TbTrash size={22} />
                      </button>
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
