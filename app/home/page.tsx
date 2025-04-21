import HomePage from "../components/HomePage"; // Panggil komponen HomePage
import HomePage2 from "../components/HomePage2"; // Panggil komponen HomePage2
import HomePage3 from "../components/HomePage3";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HomePage /> {/* Tampilkan HomePage */}
      <HomePage2 /> {/* Tampilkan HomePage2 */}
      <HomePage3 />
      <Footer />
    </div>
  );
}