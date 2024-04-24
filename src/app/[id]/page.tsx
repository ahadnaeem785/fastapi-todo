import Link from "next/link";
import InputComponent from "../input";
import { IoArrowBackCircleSharp } from "react-icons/io5";

export default function Page({ params }: { params: { id: string } }) {
    return (
        <div>
            <div className="max-h-screen">
                <div className='max-w-5xl max-h-screen mx-auto pt-5 mt-16'>
                    <h1 className='lg:text-4xl text-3xl text-[#00616C] font-serif text-center font-bold uppercase'>update todo</h1>
                    <div><InputComponent text="Update" id={Number(params.id)} hidden={true} /></div>
                </div>
                <Link href={"/"}><div className="flex justify-center items-center mb-[50px] mt-8 text-4xl text-[#00616C]"><IoArrowBackCircleSharp /></div></Link>
            </div>
        </div>
    )
}
