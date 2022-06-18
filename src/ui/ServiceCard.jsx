import React from 'react';
import { Link } from 'react-router-dom';

function ServiceCard({ id, title, src, category, phoneNumber, ratings }) {
  const services = {};
  services.name = [];
  if (category.grooming) {
    services.name.push('Grooming ');
  }
  if (category.shop) {
    services.name.push('Shop ');
  }
  if (category.hospital) {
    services.name.push('Hospital ');
  }
  if (category.hotel) {
    services.name.push('Hotel ');
  }
  return (
    <div className="flex flex-col w-60 h-[22rem] shadow-lg shadow-stone-300 rounded-xl">
      <img className="h-2/5 bg-auto rounded-t-xl" src={src} />
      <div className="flex flex-col gap-1 m-6 h-3/5 rounded-b-xl">
        <div className=""></div>
        <h5 className="font-semibold">{title}</h5>
        <p className="text-sm tracking-wide">
          <span className="font-medium">Services: </span>
          {services.name.map(el => el)}
        </p>
        <p className="text-sm tracking-wide">
          <span className="font-medium">Tel: </span> {phoneNumber}
        </p>
      </div>
      <Link
        to={`/services/${id}`}
        className="flex justify-center underline mb-8"
      >
        More
      </Link>
    </div>
  );
}

export default ServiceCard;
