import { Link } from 'react-router-dom';

function DetailNavbar() {
  return (
    <div className="sticky top-[68px] z-40 w-full py-3 shadow-md bg-white">
      <div className="flex justify-start max-w-screen-xl mx-auto">
        <Link to="/services" className="flex gap-3 items-center">
          <i className="fa-solid fa-arrow-left text-zinc-500"></i>
          <h6 className="text-zinc-800">Services</h6>
        </Link>
      </div>
    </div>
  );
}

export default DetailNavbar;
