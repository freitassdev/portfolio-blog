'use client';

import React, { useState } from 'react';
import { Github, Twitter, Linkedin, BarChart, Search } from 'lucide-react'
import { Separator } from '@/components/ui/separator';
import SearchInput from '../SearchInput/SearchInput';
import { Button } from '../ui/button';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '../ui/tooltip';
import Image from 'next/image';
import logoWhite from '@public/images/logo-white.png';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Badge } from "@/components/ui/badge"
const Navbar: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className={`top-0 h-[4.5rem] px-16 flex flex-row items-center w-full border-b border-border/40 select-none sm:px-8 max-sm:px-4 ${toggleMenu ? 'bg-background' : 'bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'}`}>
            <div className="nav-content flex flex-row items-center justify-between w-full">
                <div className="flex flex-row gap-3">
                    <Image src={logoWhite} alt='Logo' className="w-10 h-10" />
                    <h1 className='font-light text-3xl'>
                        michelfreitas
                        <Badge className='absolute h-5 p-1 ml-1'>BLOG</Badge>
                    </h1>   

                    <div className='ml-10'>
                    </div>
                </div>
                <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-center lg:gap-10">
                    <div className="nav-item">
                        <a href="#" className="text-foreground/100 transition-colors hover:text-foreground/80 lg:block font-sans font-medium">Início</a>
                    </div>
                    <div className="nav-item">
                        <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium">Últimos Artigos</a>
                    </div>
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className="nav-item">
                                    <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium">Inscrever-se</a>
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Inscreva-se para receber novos conteúdos!</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    <Button>Visitar Portfólio</Button>

                </div>
                <div className="flex flex-row items-center justify-center gap-4">

                <SearchInput />

                    <div className="flex items-center gap-3">
                        <div className="flex flex-row items-center">
                            <div className="text-muted-foreground text-md">@michelfts</div>
                        </div>
                        <Avatar>
                            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className='lg:hidden flex flex-row justify-center items-center' onClick={() => setToggleMenu(!toggleMenu)}>
                        <BarChart size={35} strokeWidth={1.6} style={{
                            rotate: '270deg'
                        }} />
                    </div>
                </div>
                {/* Mobile Nav */}
                <div
                    className={`fixed z-40 w-[100vw] sm:w-[75vw] left-0 top-[4.5rem] sm:border-r sm:rounded-br-xl border-b border-border bg-background overflow-hidden flex flex-col lg:hidden gap-12 origin-top duration-700 ${!toggleMenu ? "h-0" : "h-[345px]"}`}>
                    <div className="py-4 px-4 sm:px-10">
                        <div className="flex flex-col gap-4 font-bold tracking-wider">
                            <a href="#" className="border-l-4 border-secondary text-foreground/100 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">
                                <span className='ml-2'>Home</span>
                            </a>
                            <Separator />
                            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">
                                Sobre
                            </a>
                            <Separator />
                            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">
                                Projetos
                            </a>
                            <Separator />
                            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">
                                Formação
                            </a>
                            <Separator />
                            <a href="#" className="text-foreground/60 transition-colors hover:text-foreground/80 lg:block font-sans font-medium capitalize">
                                Carreira
                            </a>
                            <Separator />

                            <div className="flex flex-row items-center justify-center gap-6">
                                <a href=""><Linkedin size={28} strokeWidth={1.5} /></a>
                                <a href=""><Twitter size={28} strokeWidth={1.6} /></a>
                                <a href=""><Github size={28} strokeWidth={1.6} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;