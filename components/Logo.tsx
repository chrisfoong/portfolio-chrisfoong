import Link from "next/link";
import { GiAlgae } from "react-icons/gi";

export default function Logo() {
    return (
        <>
            <Link href={"https://www.youtube.com/watch?v=DVhoPrywEwM"} target={"_blank"}> 
                <div className="flex gap-2 text-white">
                        <GiAlgae size={40}/>
                        <p className="mt-2">Algae Family</p>
                </div>
            </Link>
        </>
    );
}