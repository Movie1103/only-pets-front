import { useService } from '../../../contexts/SeviceContext';
import { filterService } from '../../../services/filterService';
import ServiceCard from '../../../ui/ServiceCard';
import { useCategory } from '../../../contexts/CategoryContext';

function ServiceContainer() {
  const { isGrooming, isShop, isHospital, isHotel } = useCategory();
  const { allServices } = useService();
  const services = filterService(
    allServices,
    isGrooming,
    isShop,
    isHospital,
    isHotel
  );
  // console.log(services);
  return (
    <div className="grid grid-cols-4 col-span-4 gap-10 max-w-screen-lg m-16 mx-auto">
      {services?.map(el => (
        <ServiceCard
          key={el.id}
          id={el.id}
          title={el.title}
          src={el.coverPhoto}
          category={el.category}
          phoneNumber={el.phoneNumber}
          open={el.openAt}
          close={el.closeAt}
          ratings={el.ratings}
        />
      ))}
    </div>
  );
}

export default ServiceContainer;
