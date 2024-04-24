"use server"

import { revalidateTag } from "next/cache";

export const getTodo = async (url : string) => {
    const response = await fetch(url,{
        next : {
            tags : ["todo"]
        }
    })
    const data = await response.json()
    return data;
}

export const addTodo = async (url : string , data : any) => {
    const fetchTask = await fetch(url,{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    revalidateTag("todo")
    return "todo added successfully";
}


export const delTodo = async (url : string , data : any) => {
    const fetchTask = await fetch(url,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    revalidateTag("todo")
    return "todo deleted successfully";
}


export const updateTodo = async (url : string , data : any) => {
    const fetchTask = await fetch(url,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    revalidateTag("todo")
    return "todo updated successfully";
}