import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import EmprendimientosDestacados from "@/components/EmprendimientosDestacados";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-10">
        <h1 className="text-4xl font-bold">
          Bienvenido a InvierteLocal
        </h1>
      </main>
      <Hero />
      <Stats/>
      <SearchBar/>
      <EmprendimientosDestacados />
      <Footer/>

      
    </>
  );
}