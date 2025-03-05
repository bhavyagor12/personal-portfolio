import Portfolio from "@/components/Banner";
import NavBar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col px-6 md:px-12 lg:px-20 pt-4 max-w-7xl mx-auto">
      <NavBar />
      <main className="flex-1 flex flex-col md:flex-row mt-12 md:mt-20">
        <Portfolio />
      </main>
    </div>
  );
}
