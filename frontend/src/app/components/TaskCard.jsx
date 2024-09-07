import Image from "next/image";

export default function TaskCard({ id, title, desc, status, dateCreated, style }) {
    return (
        <div className={`flex-grid min-h-10 min-w-72 px-2 pt-1 m-4 ${style}`}>
            <p className="text-left text-gray-400 text-sm mb-2 t">Data Criação: {new Date(dateCreated).toLocaleDateString()}</p>
            <div className="mb-2 text-center">
                <h2 className="text-3xl font-bold text-blue-500">{title}</h2>
                <p className="text-sm text-gray-700">ID: {id}</p>
            </div>
            <div className="my-2 py-6 text-center text-normal">
                <p className="text-black">{desc}</p>
            </div>
            <div className="flex items-left justify-stretch px-3">
                <p className={`px-8 py-1 rounded-md ${status === 'concluded' ? 'bg-green-600' : 'bg-orange-600'} text-white`}>
                    {status}
                </p>
                <div className="flex space-x-5 ml-auto">
                    <button>
                        <Image
                            src="/imgs/edit-text.png"
                            width={22}
                            height={22}
                            alt="Ícone de edição de tarefa"
                        />
                    </button>
                    <button>
                        <Image
                            src="/imgs/delete.png"
                            width={22}
                            height={22}
                            alt="Ícone de deleção de tarefa"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
