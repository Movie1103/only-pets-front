import ServiceCard from '../../../ui/ServiceCard';
import { useService } from '../../../contexts/SeviceContext';

function MyService() {
  const { userServices } = useService();

  return (
    <div className="grid grid-cols-4 gap-x-10 gap-y-16">
      {userServices?.map(el => (
        <ServiceCard
          key={el.id}
          id={el.id}
          title={el.title}
          src={el.coverPhoto}
          category={el.category}
          phoneNumber={el.phoneNumber}
          ratings={el.ratings}
        />
      ))}
    </div>
  );
}

export default MyService;
