import Navbar from "@/components/Navbar/Navbar";
import { useState } from "react";
import Image from "next/image";
import { Separator } from '@/components/ui/separator';
function ArticlesPage() {


    return (
        <>
            <Navbar active="last-articles" />
            <div className="flex flex-col items-center px-48 mt-[calc(4.5rem+2rem)] w-full">
                <div className="flex flex-col gap-5 items-start">
                    <h1 className="text-4xl font-bold">
                        Últimos artigos.
                    </h1>
                    {/* TODO: adicionar backdropfilter grayscale ou brightness */}
                    <div className="flex flex-row gap-5 w-full">
                        <div className="flex flex-col justify-end rounded-md min-w-[50%] h-[40vh] object-cover bg-cover p-10 gap-4" style={{ backgroundImage: "url(https://t3.ftcdn.net/jpg/02/13/56/78/360_F_213567841_SiyyM6H4y067caRy58iLulWazeezPaui.jpg)" }}>
                            <h1 className="text-3xl">Como criar rotas dinamicas utilizando next.js 14 e typescript.</h1>
                            <p>01/09/2024 - 5 min de leitura.</p>
                        </div>
                        <div className="grid grid-cols-2 gap-3 h-[calc(40vh)] ">
                            {
                                Array.from({ length: 4 }).map((_, _2) => {
                                    return (
                                        <div key={_2} className="flex flex-col justify-end rounded-md min-w-[50%] object-cover bg-cover p-5 gap-2" style={{ backgroundImage: "url(https://media.istockphoto.com/id/1410455925/pt/vetorial/dynamic-blue-particle-wave-abstract-sound-visualization-digital-structure-of-the-wave-flow.jpg?s=612x612&w=0&k=20&c=Nm8ElSNJv8aSsBGoCFGE7nEdxwuVznP8gfMSUKGmoBg=)" }}>
                                            <h1 className="text-lg">Como criar rotas dinamicas utilizando next.js 14 e typescript.</h1>
                                            <p className="text-sm">01/09/2024 - 69 min de leitura.</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 items-start mt-10">
                    <h1 className="text-4xl font-bold">
                        Todos os Artigos
                    </h1>
                    {/* TODO: adicionar backdropfilter grayscale ou brightness */}
                    <div className="flex flex-row gap-5 w-full">
                        <div className="grid grid-cols-2 gap-5">
                            {
                                Array.from({ length: 10 }).map((_, _2) => {
                                    return (
                                        <div key={_2} className="flex flex-col gap-2 w-full h-[200px]">
                                            <div className="flex flex-row justify-end rounded-md h-[calc(20vh)] object-cover bg-cover gap-2 w-full py-3">
                                                <img src="https://media.istockphoto.com/id/1410455925/pt/vetorial/dynamic-blue-particle-wave-abstract-sound-visualization-digital-structure-of-the-wave-flow.jpg?s=612x612&w=0&k=20&c=Nm8ElSNJv8aSsBGoCFGE7nEdxwuVznP8gfMSUKGmoBg=" alt="Imagem representativa do Post" className="h-full rounded-md aspect-video" />
                                                <div className="flex flex-col justify-between">
                                                    <h1 className="text-lg">Como criar rotas dinamicas utilizando next.js 14 e typescript.</h1>
                                                    <div className="flex flex-row gap-2 items-center ">
                                                        <p className="text-sm text-muted-foreground whitespace-nowrap">Por Michel de Freitas</p>
                                                        <Separator className="flex-1" />
                                                        <p className="text-sm text-muted-foreground">01/09/2024</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <Separator />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ArticlesPage;