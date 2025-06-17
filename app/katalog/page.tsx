import FoodDrink from '../components/Katalog1';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
       <FoodDrink activeNav="home" />
      <Footer />
    </div>
  );
}