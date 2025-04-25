import Link from "next/link";
import { ImGithub } from "react-icons/im";

export default function Logo() {
    return (
        <>
            <Link href={"https://github.com/chrisfoong"} target={"_blank"}> 
                <div className="flex text-white">
                        <ImGithub size={56}/>
                        <p className="m-4.5">chrisfoong</p>
                </div>
            </Link>
        </>
    );
}