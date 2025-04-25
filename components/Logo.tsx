import Link from "next/link";
import { GiAlgae } from "react-icons/gi";

export default function Logo() {
    return (
        <>
            <Link href={"https://www.youtube.com/watch?v=DVhoPrywEwM"} target={"_blank"}> 
                <div className="flex gap-2 text-white transition-all duration-300 hover:text-green-400 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]">
                        <GiAlgae size={40}/>
                        <p className="mt-2 ">Algae Family</p>
                </div>
            </Link>
        </>
    );
}