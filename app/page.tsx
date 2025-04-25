import Techstack from "@/components/Techstack";
import Image from "next/image";

export default function Home() {
    return (
        <>
            <div className="grid grid-cols-2">
                <article className="mt-5 ml-10">
                    <div className="font-mono p-5 flex flex-col justify-items-right">
                        <h1 className="text-4xl font-semibold mb-2">Read Here</h1>
                        <h2 className="w-auto">{`Hi, I'm Chris Foong but you can call me Chris. I'm a passionate programmer who loves clean code, efficient workflows, and living in the terminal. I'm especially obsessed with Vim—yes, the kind of love that makes me remap keys just to shave off milliseconds. I'm all about making things faster, simpler, and smarter.`}</h2>
                        
                        <p className="mt-2">- Chris Foong</p>
                    </div>
                </article>
                <div className="mt-5 mr-5 flex justify-center">
                    <Image src="/assets/screenshot.png" alt="chris" width={250} height={250} className="rounded-full object-cover"/>
                </div>
            </div>
                <main className="flex flex-col mt-2 ml-14 text-white">
                    <h1 className="text-3xl font-semibold">Tech Stacks</h1>
                    <div className="p-5">
                        <Techstack />
                    </div>
                </main>

            <footer className="flex justify-center mt-2 ml-5">
                Skibidi Rizzler - Chimpazini Banini
            </footer>
        </>
    );
}
