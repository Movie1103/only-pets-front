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
      <div className="flex items-center gap-12">
        <button
          className="relative"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {isHovering && (
            <>
              <div className="absolute bg-black opacity-20 z-10 w-full h-full rounded-full"></div>
              <div className="absolute w-full mx-auto bottom-3 z-20 text-white">
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
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        consequatur est autem laborum repudiandae soluta fugiat accusantium
        deserunt perferendis voluptatem.
      </h3>
    </>
  );
}

export default Me;
