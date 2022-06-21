import ServiceCard from '../../../ui/ServiceCard';
import { useService } from '../../../contexts/SeviceContext';

function MyService() {
  const { userServices } = useService();
  console.log(userServices);

  return (
    <div className="grid grid-cols-3 gap-x-10 gap-y-16 m-20 mx-auto">
      {userServices?.map(el => (
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
          edit
        />
      ))}
    </div>
  );
}

export default MyService;
