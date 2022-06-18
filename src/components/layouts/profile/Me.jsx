import { useState } from 'react';
import UserIcon from '../../common/UserIcon';
import { useAuth } from '../../../contexts/AuthContext';

function Me() {
  const [isHovering, setIsHovering] = useState(false);

  const { user } = useAuth();

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div className="flex items-center gap-12 -z-10 max-w-screen-lg">
        <button
          className="relative"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {isHovering && (
            <>
              <div className="absolute bg-black opacity-20 w-full h-full rounded-full"></div>
              <div className="absolute w-full mx-auto bottom-3 z-10 text-white">
                <p className="flex justify-center text-lg">edit</p>
              </div>
            </>
          )}
          <UserIcon size="180" shadow />
        </button>
        <h1>
          {user?.firstName} {user?.lastName}
        </h1>
      </div>
    </>
  );
}

export default Me;
