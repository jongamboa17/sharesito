import Image from "next/image";
import Link from 'next/link'
import imagen from "./imageexample.png"
import smallIcon from "./small_icon.png"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center mt-2 mb-4 w-full">
      <div className="relative text-black m-2 w-5/6 lg:w-3/6 h-56 flex justify-center">
        <Image
          src={imagen}
          layout="fill"
          objectFit="cover"
          alt="Picture of the author"
          className="rounded-md"
        />
      </div>
      <div className="m-2 items-center flex flex-col">
        <h1 className="font-mono font-extrabold text-black text-2xl mb-2">Universidad Latina</h1>
        <p className=" font-thin">Potenciá tu futuro en ULatina</p>
      </div>
      
      <iframe className="w-5/6 lg:w-3/6 h-[315px] rounded-md m-2" src="https://www.youtube.com/embed/mlcsFMlkHUI?si=2Gv5YbAo6IOZz1qI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <div className="w-5/6 lg:w-3/6">
        <Link href="/about" className=" bg-lime-500 text-black p-6 rounded-md flex justify-center mb-2 hover:bg-lime-600">Oferta Académica</Link>
        <Link href="/about" className=" bg-lime-500 text-black p-6 rounded-md flex justify-center mb-2 hover:bg-lime-600">Servicios a la comunidad</Link>
        <Link href="/about" className=" bg-lime-500 text-black p-6 rounded-md flex justify-center mb-2 hover:bg-lime-600">Carreras Acreditadas</Link>
        <Link href="/about" className=" bg-lime-500 text-black p-6 rounded-md flex justify-center mb-2 hover:bg-lime-600">Financiamiento</Link>
        <Link href="/about" className=" bg-lime-500 text-black p-6 rounded-md flex justify-center mb-2 hover:bg-lime-600">Noticias</Link>
        <Link href="/about" className=" bg-lime-500 text-black p-6 rounded-md flex justify-center mb-2 hover:bg-lime-600">Eventos</Link>
      </div>
    </main>
  );
}
