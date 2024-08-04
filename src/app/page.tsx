import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
export default function Home() {

  return (
    <>
      <Navbar />
      <div className="h-[calc(100dvh-4.5rem)]"> {/* All Content */}
        <div className="flex flex-row justify-between items-center h-full mx-20"> {/* Hero Section */}
          <div className="flex flex-col justify-center gap-4">
            <h1 className="text-3xl font-bold">
              Learn development with great articles.
            </h1>
          </div>
          <div>
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
