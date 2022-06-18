import { useCategory } from '../../../contexts/CategoryContext';

function ServiceNavbar() {
  const {
    isGrooming,
    isShop,
    isHospital,
    isHotel,
    toggleGrooming,
    toggleShop,
    toggleHospital,
    toggleHotel,
  } = useCategory();
  return (
    <>
      <div className="sticky top-[68px] z-40 w-full py-3 shadow-md bg-white">
        <div className="flex items-center gap-16 px-32">
          <input type="text" className="inputbox" placeholder="Search" />
          <div className="flex gap-5">
            <button
              className={`rounded-full px-2 py-0.5 text-sm ${
                isGrooming
                  ? 'bg-blue text-white border border-blue'
                  : 'border border-neutral-400'
              }`}
              onClick={() => toggleGrooming()}
              checked={isGrooming}
              defaultChecked={isGrooming}
            >
              Grooming
            </button>
            <button
              className={`rounded-full px-2 py-0.5 text-sm ${
                isShop
                  ? 'bg-blue text-white border border-blue'
                  : 'border border-neutral-400'
              }`}
              onClick={() => toggleShop()}
              checked={isShop}
              defaultChecked={isShop}
            >
              Shop
            </button>
            <button
              className={`rounded-full px-2 py-0.5 text-sm ${
                isHospital
                  ? 'bg-blue text-white border border-blue'
                  : 'border border-neutral-400'
              }`}
              onClick={() => toggleHospital()}
              checked={isHospital}
              defaultChecked={isHospital}
            >
              Hospital
            </button>
            <button
              className={`rounded-full px-2 py-0.5 text-sm ${
                isHotel
                  ? 'bg-blue text-white border border-blue'
                  : 'border border-neutral-400'
              }`}
              onClick={() => toggleHotel()}
              checked={isHotel}
              defaultChecked={isHotel}
            >
              Hotel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceNavbar;
