import { useRef, useState } from 'react';
import UserIcon from '../../common/UserIcon';
import { useAuth } from '../../../contexts/AuthContext';
import Modal from '../../../ui/Modal';
import { updateProfile } from '../../../api/user';

function Me() {
  const { user } = useAuth();
  const [isEdit, setIsEdit] = useState(false);
  const [firstName, setFirstName] = useState(user?.firstName);
  const [lastName, setLastName] = useState(user?.lastName);
  const [profilePic, setProfilePic] = useState(null);
  const { fetchMe } = useAuth();
  const inputCoverPhoto = useRef();

  const handleOnClose = () => {
    setProfilePic(null);
    setIsEdit(false);
  };

  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append('firstName', firstName);
      formData.append('lastName', lastName);
      formData.append('profilePic', profilePic);
      await updateProfile(formData);
      await fetchMe();
      handleOnClose();
    } catch (err) {}
  };

  return (
    <div className="flex flex-col m-20">
      <div className="flex items-center gap-72">
        <div className="flex items-center gap-16">
          <UserIcon src={user?.profilePic} size="180" shadow />
          <div className="flex flex-col gap-5">
            <h1>{user?.username}</h1>
            <h5>
              {user?.firstName} {user?.lastName}
            </h5>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            className="button-edit flex gap-2 items-center"
            onClick={() => setIsEdit(true)}
          >
            Edit
            <i className="fa-solid fa-pen text-xs"></i>
          </button>
          <Modal visible={isEdit} onClose={handleOnClose}>
            <form className="flex flex-col gap-5" onSubmit={handleSubmitForm}>
              <div className="flex justify-center">
                <h3>Edit Profile</h3>
              </div>
              <div className="flex flex-col">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  className="inputbox px-4 py-1.5"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  className="inputbox px-4 py-1.5"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                />
              </div>
              <div id="profilePic" className="flex flex-col">
                <label htmlFor="profilePic">Profile Picture</label>
                <div
                  role="button"
                  onClick={() => inputCoverPhoto.current.click()}
                >
                  {profilePic ? (
                    <div className="flex justify-center max-w-xs">
                      <img
                        src={
                          URL.createObjectURL(profilePic) || user?.profilePic
                        }
                        alt="profilePic"
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
                    onChange={e => setProfilePic(e.target.files[0])}
                  />
                </div>
              </div>
              <button type="submit" className="button-submit my-3 py-2">
                Update
              </button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Me;
