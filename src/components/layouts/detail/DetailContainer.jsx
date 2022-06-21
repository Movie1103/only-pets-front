import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../../../contexts/AuthContext';
import { useService } from '../../../contexts/SeviceContext';
import ContactCard from '../../../ui/detailUi/ContactCard';
import HeroInfoCard from '../../../ui/detailUi/HeroInfoCard';
import Modal from '../../../ui/Modal';

function DetailContainer() {
  const { allServices, updateService } = useService();
  const { pathname } = useLocation();
  const { user } = useAuth();
  const { fetchAllServices } = useService();
  const serviceId = pathname.split('/')[2];
  const service = allServices?.filter(el => el.id === +serviceId);

  let oldService;
  if (service) {
    oldService = service[0];
  }

  const [editHero, setEditHero] = useState(false);
  const [editContact, setEditContact] = useState(false);
  const inputCoverPhoto = useRef();
  const [title, setTitle] = useState(oldService?.title);
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [openAt, setOpenAt] = useState(oldService?.openAt);
  const [closeAt, setCloseAt] = useState(oldService?.closeAt);
  const [phoneNumber, setPhoneNumber] = useState(oldService?.phoneNumber);
  const [line, setLine] = useState(oldService?.line);
  const [facebook, setFacebook] = useState(oldService?.facebook);
  const [instagram, setInstagram] = useState(oldService?.instagram);
  const [grooming, setGrooming] = useState(oldService?.category.grooming);
  const [shop, setShop] = useState(oldService?.category.shop);
  const [hospital, setHospital] = useState(oldService?.category.hospital);
  const [hotel, setHotel] = useState(oldService?.category.hotel);
  const [detail, setDetail] = useState(oldService?.address.detail);
  const [subDistrict, setSubDistrict] = useState(
    oldService?.address.subDistrict
  );
  const [district, setDistrict] = useState(oldService?.address.district);
  const [province, setProvince] = useState(oldService?.address.province);
  const [zipcode, setZipcode] = useState(oldService?.address.zipcode);

  if (oldService?.coverPhoto === null) {
    setCoverPhoto(null);
  }

  const category = {
    grooming,
    shop,
    hospital,
    hotel,
  };
  const address = {
    detail,
    subDistrict,
    district,
    province,
    zipcode,
  };

  const handleSubmitEditHero = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', title);
      formData.append('coverPhoto', coverPhoto);
      formData.append('openAt', openAt);
      formData.append('closeAt', closeAt);
      formData.append('category', JSON.stringify(category));
      await updateService(serviceId, formData);
      await fetchAllServices();
      handleCancelForm();
    } catch (err) {}
  };

  const handleSubmitEditContact = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('phoneNumber', phoneNumber);
      formData.append('line', line);
      formData.append('facebook', facebook);
      formData.append('instagram', instagram);
      formData.append('address', JSON.stringify(address));
      await updateService(serviceId, formData);
      await fetchAllServices();
      handleCancelForm();
    } catch (err) {}
  };

  const handleCancelForm = () => {
    setTitle('');
    setCoverPhoto(null);
    setOpenAt('');
    setCloseAt('');
    setPhoneNumber('');
    setLine('');
    setFacebook('');
    setInstagram('');
    setGrooming(false);
    setShop(false);
    setHospital(false);
    setHotel(false);
    setDetail('');
    setSubDistrict('');
    setDistrict('');
    setProvince('');
    setZipcode('');
    handleOnClose();
  };

  const handleOnClose = () => {
    setEditHero(false);
    setEditContact(false);
  };

  return (
    <>
      {service?.map(el => (
        <div
          key={el.id}
          className="flex flex-col gap-14 max-w-screen-md m-16 mx-auto"
        >
          <div className="flex flex-col gap-2">
            {user?.id === el.userId && (
              <div className="flex justify-end">
                <button
                  className="button-edit flex gap-2 items-center"
                  onClick={() => setEditHero(true)}
                >
                  Edit
                  <i className="fa-solid fa-pen text-xs"></i>
                </button>
              </div>
            )}
            <HeroInfoCard
              title={el.title}
              src={el.coverPhoto}
              category={el.category}
              open={el.openAt}
              close={el.closeAt}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h5 className="font-medium">Contact us</h5>
              {user?.id === el.userId && (
                <button
                  className="button-edit flex gap-2 items-center"
                  onClick={() => setEditContact(true)}
                >
                  Edit
                  <i className="fa-solid fa-pen text-xs"></i>
                </button>
              )}
            </div>
            <ContactCard
              phoneNumber={el.phoneNumber}
              line={el.line}
              facebook={el.facebook}
              ig={el.instagram}
              address={el.address}
            />
          </div>
        </div>
      ))}
      <Modal visible={editHero} onClose={handleOnClose}>
        <form onSubmit={handleSubmitEditHero}>
          <div className="flex flex-col gap-5 text-black custom-modal px-2">
            <h2 className="flex justify-center">Edit Main</h2>
            <div className="flex flex-col">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                id="title"
                className="inputbox"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div id="coverPhoto" className="flex flex-col">
              <label htmlFor="coverPhoto">Cover Photo</label>
              <div
                role="button"
                onClick={() => inputCoverPhoto.current.click()}
              >
                {coverPhoto ? (
                  <div className="flex justify-center max-w-xs">
                    <img
                      src={URL.createObjectURL(coverPhoto)}
                      alt="coverPhoto"
                      className="rounded-2xl"
                    />
                  </div>
                ) : (
                  <div className="flex justify-center items-center py-10 rounded-2xl bg-zinc-200 shadow-lg">
                    <i className="fa-solid fa-image text-2xl text-neutral-500 z-40"></i>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/jpeg, image/png"
                  ref={inputCoverPhoto}
                  className="hidden"
                  onChange={e => setCoverPhoto(e.target.files[0])}
                />
              </div>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-start gap-5">
                <div className="flex gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="openingTime">Opening Time</label>
                    <input
                      id="openingTime"
                      type="time"
                      className="input-time"
                      value={openAt}
                      onChange={e => setOpenAt(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="closingTime">Closing Time</label>
                    <input
                      id="closingTime"
                      type="time"
                      className="input-time"
                      value={closeAt}
                      onChange={e => setCloseAt(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-5">
                <div className="flex flex-col">
                  <label htmlFor="grooming">Category</label>
                  <div
                    id="grooming"
                    className="flex gap-3 py-1.5 justify-center items-center"
                  >
                    <div
                      className={grooming ? 'button-select' : 'button-unselect'}
                      role="button"
                      onClick={() => setGrooming(prev => !prev)}
                    >
                      Grooming
                    </div>
                    <div
                      className={shop ? 'button-select' : 'button-unselect'}
                      role="button"
                      onClick={() => setShop(prev => !prev)}
                    >
                      Shop
                    </div>
                    <div
                      className={hospital ? 'button-select' : 'button-unselect'}
                      onClick={() => setHospital(prev => !prev)}
                    >
                      Hospital
                    </div>
                    <div
                      className={hotel ? 'button-select' : 'button-unselect'}
                      role="button"
                      onClick={() => setHotel(prev => !prev)}
                    >
                      Hotel
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10 gap-5">
              <div
                role="button"
                type="submit"
                className="button-cancel my-4 py-2 px-4"
                onClick={handleCancelForm}
              >
                Cancel
              </div>
              <button className="button-submit my-4 py-2 px-12">Update</button>
            </div>
          </div>
        </form>
      </Modal>
      <Modal visible={editContact} onClose={handleOnClose}>
        <form onSubmit={handleSubmitEditContact}>
          <div className="flex flex-col gap-5 text-black custom-modal px-2">
            <h2 className="flex justify-center">Edit Contact</h2>
            <div className="flex gap-8">
              <div className="flex flex-col items-start gap-5">
                <div className="flex flex-col">
                  <label htmlFor="phoneNumber">{`Phone Number (+66)`}</label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className="inputbox"
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="facebook">{`Facebook (optional)`}</label>
                  <input
                    type="text"
                    id="facebook"
                    className="inputbox"
                    value={facebook}
                    onChange={e => setFacebook(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-5">
                <div className="flex flex-col">
                  <label htmlFor="line">{`Line (optional)`}</label>
                  <input
                    type="text"
                    id="line"
                    className="inputbox"
                    value={line}
                    onChange={e => setLine(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="instagram">{`Instagram (optional)`}</label>
                  <input
                    type="text"
                    id="instagram"
                    className="inputbox"
                    value={instagram}
                    onChange={e => setInstagram(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="detail">Address</label>
              <input
                type="text"
                id="detail"
                className="inputbox"
                value={detail}
                onChange={e => setDetail(e.target.value)}
              />
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col items-start gap-5">
                <div className="flex flex-col">
                  <label htmlFor="subDistrict">Sub-district</label>
                  <input
                    type="text"
                    id="subDistrict"
                    className="inputbox"
                    value={subDistrict}
                    onChange={e => setSubDistrict(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="province">Province</label>
                  <input
                    type="text"
                    id="province"
                    className="inputbox"
                    value={province}
                    onChange={e => setProvince(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col items-start gap-5">
                <div className="flex flex-col">
                  <label htmlFor="district">District</label>
                  <input
                    type="text"
                    id="district"
                    className="inputbox"
                    value={district}
                    onChange={e => setDistrict(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="zipcode">Zip Code</label>
                  <input
                    type="text"
                    id="zipcode"
                    className="inputbox"
                    value={zipcode}
                    onChange={e => setZipcode(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-10 gap-5">
              <div
                role="button"
                type="submit"
                className="button-cancel my-4 py-2 px-4"
                onClick={handleCancelForm}
              >
                Cancel
              </div>
              <button className="button-submit my-4 py-2 px-12">Update</button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default DetailContainer;
