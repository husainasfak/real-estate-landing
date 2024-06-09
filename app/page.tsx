import ChooseUs from "@/Components/ChooseUs";
import Faq from "@/Components/Faq";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import Newsletters from "@/Components/Newsletters";
import OurService from "@/Components/OurService";
import Popular from "@/Components/Popular";

export default function Home() {
  return (
    <>
      <main className="container m-auto w-[1200px]">
        <Header sx="mt-[20px]" />
        <Popular className="mt-[160px]" />
        <ChooseUs className="mt-[160px]" />
        <OurService className="mt-[160px]" />
        <Faq className="mt-[160px]" />
        <Newsletters className="mt-[160px]" />
        <br />
        <br />
        <br />
      </main>
      <Footer />
    </>
  );
}
