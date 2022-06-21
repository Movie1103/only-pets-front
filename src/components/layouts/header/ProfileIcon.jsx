import UserIcon from '../../common/UserIcon';
import Dropdown from './Dropdown';

function ProfileIcon({ src, show, setShow }) {
  return (
    <div className="relative text-black" onClick={e => e.stopPropagation()}>
      <button
        className={`flex items-center justify-center`}
        onClick={() => setShow(prev => !prev)}
      >
        <UserIcon src={src} size="40" />
      </button>
      <div className="absolute top-16 -right-3 z-10">
        <Dropdown show={show} setShow={setShow} />
      </div>
    </div>
  );
}

export default ProfileIcon;
