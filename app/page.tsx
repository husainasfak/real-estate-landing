import ChooseUs from "@/Components/ChooseUs";
import Header from "@/Components/Header";
import OurService from "@/Components/OurService";
import Popular from "@/Components/Popular";

export default function Home() {
  return (
    <main className="container m-auto w-[1200px]">
      <Header sx="mt-[20px]" />
      <Popular className="mt-[160px]" />
      <ChooseUs className="mt-[160px]" />
      <OurService className="mt-[160px]" />
      <br />
      <br />
      <br />
    </main>
  );
}
