import grooming from '../../../img/PetGrooming.jpg';
import shop from '../../../img/PetShop3.jpg';
import hotel from '../../../img/PetHotel.jpg';
import CategoryCard from '../../../ui/CategoryCard';
import { Link } from 'react-router-dom';

function Category() {
  return (
    <div className="py-20">
      <div className="container">
        <h3>What are you looking for?</h3>
        <div className="flex justify-center gap-12 py-8">
          <Link to="/services">
            <CategoryCard src={grooming} title="Grooming" />
          </Link>
          <Link to="/services">
            <CategoryCard src={shop} title="Shop" />
          </Link>
          <Link to="/services">
            <CategoryCard src={hotel} title="Hospital" />
          </Link>
          <Link to="/services">
            <CategoryCard src={hotel} title="Hotel" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
