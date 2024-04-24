import { getTodo } from "./action"
import Footer from "./footer"
import InputComponent from "./input"
import TodoData from "./todo"

export interface Todo {
  id: number,
  content: string
}

export default async function Home() {

  const todos: Todo[] = await getTodo("http://127.0.0.1:8000/todos")
  // console.log(todos)
  return (
    <div>
      <div className=" mb-[50px]">
        <div className='max-w-5xl mx-auto pt-5 mt-6'>
          <div className="mb-[40px] lg:mb-[50px]">
            <h1 className='text-4xl font-serif text-center font-bold text-[#00616C]'>TODO APP</h1>
            <InputComponent text="Add" />
          </div>
          <div >
            <h1 className='text-3xl text-center font-serif font-semibold mt-8 text-[#00616C]'>Todo List</h1>
            <TodoData todos={todos} />
          </div>
        </div>
      </div>
      <Footer />
    </div>

  )
}
