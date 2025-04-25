import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGooglecolab, SiNeovim, SiNextdotjs, SiPostman } from "react-icons/si";

export default function Techstack() {
    return (
        <>
        <div className="grid grid-cols-4 gap-5 text-4xl w-50">
            <SiNextdotjs />
            <FaReact className="text-cyan-400" />
            <RiTailwindCssFill className="text-blue-400"/>
            <SiGooglecolab className="text-orange-400" />
            <SiNeovim className="text-green-400" />
            <SiPostman className="text-orange-400" />
        </div> 
        </>
    );
}