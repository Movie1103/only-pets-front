import defaulPic from '../../img/user.png';

function UserIcon({ src, size, shadow, border }) {
  return (
    <img
      className={`rounded-full${shadow ? ' shadow-lg' : ''}${
        border ? ' border-white border' : ''
      }`}
      src={src || defaulPic}
      width={size}
      height={size}
      alt="user"
    />
  );
}

export default UserIcon;
