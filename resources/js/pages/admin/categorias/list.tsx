import PageHeader from '@/components/layouts/PageHeader';
import { Link, useForm, usePage } from '@inertiajs/react';
import { TbEdit } from 'react-icons/tb';
import { BiCategory } from 'react-icons/bi';
import { TbTrash } from 'react-icons/tb';
import { useEffect } from 'react';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import {
    TableHeader,
    TableBody,
    Table,
    TableTh,
    TableTd,
} from '@/components/table';
import Swal from '@/components/lib/swal';

type PageProps = {
    category: {
        id: number;
        name: string;
        description: string;
        user_id: number;
    };

    flash: {
        success: string | null;
        error: string | null;
    };
};

export default function CategoryPage() {
    const { categories, flash } = usePage<PageProps>().props;
    const { post } = useForm({});

    const destroy = (id: number) => {
        Swal.fire({
            title: 'Tem certeza?',
            text: 'Deseja excluir essa categoria?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sim, excluir',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: '#dc2626',
        }).then((result) => {
            if (result.isConfirmed) {
                post(`/admin/categorias/delete/${id}`);
            }
        });
    };
    useEffect(() => {
        if (flash.success) {
            toast.success(flash.success, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    }, [flash.success]);

    return (
        <>
            <ToastContainer />
            <PageHeader
                icon={BiCategory}
                title="Categoria"
                createRoute="/admin/categorias/create"
                createLabel="Nova Categoria"
            />
            <div className="flex w-full flex-col gap-6 p-10">
                <section className="flex w-full flex-row">
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
                                    className="border-b border-slate-300 transition hover:bg-slate-200"
                                >
                                    <TableTd>
                                        <p className="font-semibold">
                                            {category.name}
                                        </p>
                                        <div className="flex items-center gap-1 text-slate-400 italic">
                                            <IoIosArrowRoundForward />{' '}
                                            {category.description}
                                        </div>
                                    </TableTd>
                                    <TableTd className="flex items-center justify-evenly">
                                        <Link
                                            href={`/admin/categorias/edit/${category.id}`}
                                            className="rounded-lg bg-slate-100 p-1 hover:text-slate-900"
                                        >
                                            <TbEdit size={25} />
                                        </Link>
                                        <Link
                                            onClick={() => destroy(category.id)}
                                            className="rounded-lg bg-slate-100 p-1 hover:text-red-900"
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
