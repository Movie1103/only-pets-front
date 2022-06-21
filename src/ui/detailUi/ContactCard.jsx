function ContactCard({ userId, phoneNumber, line, facebook, ig, address }) {
  return (
    <div className="flex shadow-lg drop-shadow-sm shadow-neutral-300 rounded-xl">
      <div className="flex flex-col gap-6 m-12">
        <p className="text-sm tracking-wider">
          <span className="font-medium text-lg tracking-normal">Tel: </span>
          {phoneNumber}
        </p>
        {(line !== '' || facebook !== '' || ig !== '') && (
          <div className="flex justify-start items-center gap-9 text-2xl">
            {line !== '' && <i className="fa-brands fa-line"></i>}
            {facebook && (
              <a href={facebook}>
                <i className="fa-brands fa-facebook"></i>
              </a>
            )}
            {ig && (
              <a href={`https://www.instagram.com/${ig}`}>
                <i className="fa-brands fa-instagram"></i>
              </a>
            )}
          </div>
        )}
        {address && (
          <p>
            <span className="font-medium">Address: </span>
            {address.detail} {address.subDistrict} {address.district}{' '}
            {address.province} {address.zipcode}
          </p>
        )}
      </div>
    </div>
  );
}

export default ContactCard;
