import { useRef, useState } from 'react';
import { createService } from '../../../api/service';
import { useAuth } from '../../../contexts/AuthContext';
import Modal from '../../../ui/Modal';

function AddService({ showModal, closeModal }) {
  const inputCoverPhoto = useRef();
  const [title, setTitle] = useState('');
  const [coverPhoto, setCoverPhoto] = useState(null);
  const [openAt, setOpenAt] = useState('');
  const [closeAt, setCloseAt] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [line, setLine] = useState('');
  const [facebook, setFacebook] = useState('');
  const [instagram, setInstagram] = useState('');
  const [grooming, setGrooming] = useState(false);
  const [shop, setShop] = useState(false);
  const [hospital, setHospital] = useState(false);
  const [hotel, setHotel] = useState(false);
  const [detail, setDetail] = useState('');
  const [subDistrict, setSubDistrict] = useState('');
  const [district, setDistrict] = useState('');
  const [province, setProvince] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const { fetchMe } = useAuth();

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
  const location = {
    latitude,
    longitude,
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('title', title);
      formData.append('coverPhoto', coverPhoto);
      formData.append('openAt', openAt);
      formData.append('closeAt', closeAt);
      formData.append('phoneNumber', phoneNumber);
      formData.append('line', line);
      formData.append('facebook', facebook);
      formData.append('instagram', instagram);
      formData.append('category', JSON.stringify(category));
      formData.append('address', JSON.stringify(address));
      formData.append('location', JSON.stringify(location));
      await createService(formData);
      await fetchMe();
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
    setLatitude('');
    setLongitude('');
    closeModal();
  };

  return (
    <Modal visible={showModal} onClose={closeModal}>
      <form onSubmit={handleSubmitForm}>
        <div className="flex flex-col gap-5 text-black custom-modal px-2">
          <h2 className="flex justify-center">Add Service</h2>
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
            <div role="button" onClick={() => inputCoverPhoto.current.click()}>
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
              <div className="flex flex-col">
                <label htmlFor="latitude">Latitude</label>
                <input
                  type="text"
                  id="latitude"
                  className="inputbox"
                  value={latitude}
                  onChange={e => setLatitude(e.target.value)}
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
              <div className="flex flex-col">
                <label htmlFor="longitude">Longitude</label>
                <input
                  type="text"
                  id="longitude"
                  className="inputbox"
                  value={longitude}
                  onChange={e => setLongitude(e.target.value)}
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
            <button className="button-submit my-4 py-2 px-12">
              Create Service
            </button>
          </div>
        </div>
      </form>
    </Modal>
  );
}

export default AddService;
