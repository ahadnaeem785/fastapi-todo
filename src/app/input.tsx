"use client"
import { useState } from "react"
import { addTodo, updateTodo } from "./action"

export default function InputComponent({text,id,hidden=false}:{text:string,id?:number,hidden?:boolean}) {

  const [inputVal, setInput] = useState("")
  const [inputid, setId] = useState(0)
  return (
    <div className='flex justify-center mt-10 text-lg gap-2 lg:gap-3'>
      <input
        placeholder='write text here'
        type="text"
        value={inputVal}
        required
        onChange={(e) => setInput(e.target.value)}
        className='shadow border-b bg-[#00616C] text-white  focus:outline-none py-3 px-4 rounded-md w-[45%]' />
      <input
        placeholder='write id'
        type="number"
        value={inputid}
        onChange={(e: any) => setId(e.target.value)}
        className={`shadow border-b bg-[#00616C] text-white focus:outline-none py-3 px-3 rounded-md w-[10%] ${hidden && "hidden"}`} />
      {inputVal && text == "Add" && <button
        onClick={() => {
          addTodo("http://127.0.0.1:8000/todos", { id: inputid, content: inputVal })
          setInput("")
          setId(0)
        }}
        className='bg-[#00616C]  text-white text-base rounded-md cursor-pointer py-2 px-4'>{text}</button>}
      {inputVal && text == "Update" && <button
        onClick={() => {
          updateTodo(`http://127.0.0.1:8000/todos/${id}`, { id:id, content: inputVal })
          setInput("")
          setId(0)
        }}
        className='bg-[#00616C]  text-white text-base rounded-md cursor-pointer py-2 px-4'>{text}</button>}
    </div>
  )
}
// text-[#00616C]
