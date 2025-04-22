import About1 from "../components/About1"; // Panggil komponen HomePage
import About2 from "../components/About2"; // Panggil komponen HomePage2
import About3 from "../components/About3";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <About1 /> 
      <About2 /> 
      <About3 />
      <Footer />
    </div>
  );
}