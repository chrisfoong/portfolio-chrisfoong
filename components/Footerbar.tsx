import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaSteamSquare } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

export default function Footerbar() {
    return (
        <>
            <div className="flex justify-evenly">
                <Link href="https://www.instagram.com/chriss_fng" target="_blank">
                    <div className="flex gap-2 transition-all duration-300 hover:text-green-400 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]">
                        <FaInstagram size={24}/>
                        <p>chriss_fng</p>
                    </div>
                </Link>
                <Link href="https://www.facebook.com/chris.foong.31/" target="_blank">
                    <div className="flex gap-2 transition-all duration-300 hover:text-green-400 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]">
                        <FaFacebookSquare size={24}/>
                        <p>Pomdet Foong</p>
                    </div>
                </Link>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                    <div className="flex gap-2 transition-all duration-300 hover:text-green-400 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]">
                        <FaSteamSquare size={24}/>
                        <p>chrisfoong</p>
                    </div>
                </Link>
                <Link href={"https://github.com/chrisfoong"} target={"_blank"}> 
                <div className="flex gap-2 transition-all duration-300 hover:text-green-400 hover:scale-110 hover:drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]">
                        <ImGithub size={24}/>
                        <p>chrisfoong</p>
                </div>
                </Link>
            </div>
        </>
    );
}