"use client"
import Link from "next/link"
import { delTodo } from "./action"
import { Todo } from "./page"

export default function TodoData({ todos }: { todos: Todo[] }) {
    return (
        <div className="flex flex-col mx-auto gap-4 mt-8 px-4 max-w-3xl">
            {
                todos && todos.map((item: any) => {
                    return (
                        <div className='shadow-md pb-1 pt-2 px-3 ' key={item.id}>
                            <div className='flex justify-between'>
                                <span className='shadow bg-[#00616C] text-white rounded-full h-5 w-6 text-center pb-6'>{item.id}</span>
                                <button onClick={() => delTodo(`http://127.0.0.1:8000/todos/${item.id}`, { id: item.id })} className='shadow rounded-full h-5 w-6 text-center pb-6 text-white bg-[#00616C] cursor-pointer font-semibold'>X</button>
                            </div>
                            {/* data div */}
                            <div className='text-xl text-gray-900 mt-4 pl-4'>{item.content}</div>
                            <Link href={`/${item.id}`}><div className='text-right text-[#00616C] cursor-pointer '>Edit</div></Link>
                        </div>
                    )
                })
            }
        </div>
    )
}