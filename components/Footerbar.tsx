import Link from "next/link";
import { FaFacebookSquare, FaInstagram, FaSteamSquare } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

export default function Footerbar() {
    return (
        <>
            <div className="flex justify-evenly">
                <Link href="https://www.instagram.com/chriss_fng" target="_blank">
                    <div className="flex gap-2">
                        <FaInstagram size={24}/>
                        <p>chriss_fng</p>
                    </div>
                </Link>
                <Link href="https://www.facebook.com/chris.foong.31/" target="_blank">
                    <div className="flex gap-2">
                        <FaFacebookSquare size={24}/>
                        <p>Pomdet Foong</p>
                    </div>
                </Link>
                <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                    <div className="flex gap-2">
                        <FaSteamSquare size={24}/>
                        <p>chrisfoong</p>
                    </div>
                </Link>
                <Link href={"https://github.com/chrisfoong"} target={"_blank"}> 
                <div className="flex gap-2">
                        <ImGithub size={24}/>
                        <p>chrisfoong</p>
                </div>
                </Link>
            </div>
        </>
    );
}