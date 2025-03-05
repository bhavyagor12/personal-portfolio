import Banner from "@/components/Banner";
import GettingStarted from "@/components/GettingStarted";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col h-full gap-4">
      <Banner />
      <GettingStarted />
    </main>
  );
}
