import React, { useState } from 'react';
import ProfileDisplay from './ProfileDisplay';
import ProfileEdit from './ProfileEdit';

const initialProfile = {
  name: 'John Doe',
  university: 'University A',
  gpa: 3.8,
  accomplishments: ['Completed Project X', 'Won Coding Challenge'],
  projectDetails: 'Developed a web application using React.',
  assignedTeam: 'Team Alpha',
  mentor: 'Mentor A',
};

const ProfilePage: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState(initialProfile);

  const handleSave = (updatedProfile: typeof initialProfile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <ProfileEdit initialProfile={profile} onSave={handleSave} />
      ) : (
        <ProfileDisplay {...profile} />
      )}
      <button
        onClick={() => setIsEditing(!isEditing)}
        className="mt-4 bg-green-500 text-white p-2 rounded-md"
      >
        {isEditing ? 'Cancel' : 'Edit Profile'}
      </button>
    </div>
  );
};

export default ProfilePage;
