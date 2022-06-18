import { Link } from 'react-router-dom';
import grooming from '../../../img/PetGrooming.jpg';
import shop from '../../../img/PetShop3.jpg';
import hotel from '../../../img/PetHotel.jpg';
import CategoryCard from '../../../ui/CategoryCard';
import { useCategory } from '../../../contexts/CategoryContext';

function Category() {
  const { setIsGrooming, setIsShop, setIsHospital, setIsHotel, setFalse } =
    useCategory();
  return (
    <div className="py-20">
      <div className="container">
        <h3>What are you looking for?</h3>
        <div className="flex justify-center gap-12 py-8">
          <Link
            to="/services"
            onClick={() => {
              setFalse();
              setIsGrooming(true);
            }}
          >
            <CategoryCard src={grooming} title="Grooming" />
          </Link>
          <Link
            to="/services"
            onClick={() => {
              setFalse();
              setIsShop(true);
            }}
          >
            <CategoryCard src={shop} title="Shop" />
          </Link>
          <Link
            to="/services"
            onClick={() => {
              setFalse();
              setIsHospital(true);
            }}
          >
            <CategoryCard src={hotel} title="Hospital" />
          </Link>
          <Link
            to="/services"
            onClick={() => {
              setFalse();
              setIsHotel(true);
            }}
          >
            <CategoryCard src={hotel} title="Hotel" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
