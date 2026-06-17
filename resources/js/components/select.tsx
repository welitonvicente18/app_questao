export function select() {
    return (
        <>
            <select className="w-full rounded-md border border-gray-300 px-4 py-2 transition duration-200 focus:border-slate-500 focus:ring-2 focus:ring-slate-400 focus:outline-none">
                <option value="0">Usuário</option>
                <option value="1">Administrador</option>
            </select>
        </>
    );
}
