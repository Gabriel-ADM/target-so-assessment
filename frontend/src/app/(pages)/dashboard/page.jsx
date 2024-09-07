'use client'

import { useState } from "react"
import TaskCard from "../../components/TaskCard"

export default function Dashboard() {
    const [tasks, setTasks] = useState([
        { id: 1, title: "Tarefa", desc: "Finalizar projeto", status: 'concluded', dateCreated: Date.now() },
        { id: 1, title: "Tarefa", desc: "Finalizar projeto", status: 'concluded', dateCreated: Date.now() },
        { id: 1, title: "Tarefa", desc: "Finalizar projeto", status: 'concluded', dateCreated: Date.now() },
        { id: 1, title: "Tarefa", desc: "Finalizar projeto", status: 'concluded', dateCreated: Date.now() },
        { id: 1, title: "Tarefa", desc: "Finalizar projeto", status: 'concluded', dateCreated: Date.now() },
        { id: 1, title: "Tarefa", desc: "Finalizar projeto", status: 'concluded', dateCreated: Date.now() },
        { id: 1, title: "Tarefa", desc: "Finalizar projeto", status: 'concluded', dateCreated: Date.now() },
        { id: 1, title: "Tarefa", desc: "Finalizar projeto", status: 'concluded', dateCreated: Date.now() },
    ]);

    return (
        <div className="grid grid-rows-[20px_1fr_20px] bg-gray-200 items-betw justify-items-center min-h-screen p-6 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className="text-gray-800 text-xl font-semibold sm:text-2xl text-center">Dashboard</h1>
            <main className="grid grid-flow-row-dense grid-cols-3 sm:items-start">
                {tasks.map(({ id, title, desc, status, dateCreated }) => (
                    <TaskCard
                        key={id}
                        style={"border border-gray-300 rounded-xl p-4 bg-white shadow-md"}
                        id={id}
                        title={title}
                        desc={desc}
                        status={status}
                        dateCreated={dateCreated}
                    />
                ))}
            </main>
        </div>
    )
}
