import React from 'react';
import Me from './Me';

function ProfileContainer() {
  return (
    <div className="flex flex-col gap-10 max-w-screen-lg">
      <Me />
    </div>
  );
}

export default ProfileContainer;
