import { Link } from 'react-router-dom';
import { useService } from '../contexts/SeviceContext';
import { categoryList } from '../services/categoryList';

function ServiceCard({
  id,
  title,
  src,
  category,
  open,
  close,
  phoneNumber,
  edit,
}) {
  const { deleteService, fetchUserServices } = useService();
  const list = categoryList(category);

  const handleDeleteService = async () => {
    await deleteService(id);
    await fetchUserServices();
  };

  return (
    <div
      className="flex flex-col w-60 h-[22rem] shadow-lg shadow-stone-300 rounded-xl"
      key={id}
    >
      <img
        className="h-2/5 bg-auto rounded-t-xl"
        src={src}
        alt="Service cover"
      />
      <div className="flex flex-col gap-1 m-4 mx-5 h-3/5 rounded-b-xl">
        <h5 className="font-semibold">{title}</h5>
        <p className="text-sm tracking-wide">
          <span className="font-medium">Services: </span>
          {list.map(el => el)}
        </p>
        <p className="text-sm tracking-wide">
          <span className="font-medium">Open: </span>
          {open} - {close}
        </p>
        <p className="text-sm tracking-wide">
          <span className="font-medium">Tel: </span> {phoneNumber}
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 mb-8">
        {edit && (
          <button className="button-delete" onClick={handleDeleteService}>
            <i className="fa-solid fa-trash-can text-white"></i>
          </button>
        )}
        <Link to={`/services/${id}`} className="underline">
          More
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
