import Navbar from "@/components/Navbar/Navbar";
import SearchInput from "@/components/SearchInput/SearchInput";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import abstractBg from "@public/images/abstract-bg.png";

export default function Home() {

  return (
    <>
      <div className={`absolute w-[900px] h-[900px] bg-no-repeat -z-10 blur-sm brightness-50 `} style={{
        backgroundImage: `url(${abstractBg.src})`,
      }}></div>
      <Navbar />
      <div className="h-[100dvh]"> {/* All Content */}
        <div className="flex flex-row justify-between items-center h-full mx-24"> {/* Hero Section */}
          <div className="flex flex-col justify-center gap-4 w-[50%]">
            <h3 className="text-2xl text-zinc-400">Por Michel de Freitas.</h3>
            <h1 className="text-6xl font-bold">
              Onde o Código Encontra a Criatividade
            </h1>
              <p className="text-xl text-zinc-400">Aqui você encontrará ferramentas e conhecimentos para transformar suas ideias em projetos reais. Junte-se a nós para dominar a arte do código!</p>
              <div className="flex flex-row gap-4 items-center mt-4">
                <SearchInput className="h-10" />
                <Button>Ver Artigos</Button>
              </div>
          </div>
          <div className="flex flex-row items-center justify-center w-[50%]">
            <Image
              src="/images/logo-white.png"
              alt="Hero"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </>
  );
}
