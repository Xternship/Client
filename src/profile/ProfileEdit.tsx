import React, { useState } from 'react';

interface EditProfileProps {
  initialProfile: {
    name: string;
    university: string;
    gpa: number;
    accomplishments: string[];
    projectDetails: string;
    assignedTeam: string;
    mentor: string;
  };
  onSave: (updatedProfile: any) => void;
}

const ProfileEdit: React.FC<EditProfileProps> = ({ initialProfile, onSave }) => {
  const [profile, setProfile] = useState(initialProfile);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleAccomplishmentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      accomplishments: value.split('\n'),
    }));
  };

  const handleSave = () => {
    onSave(profile);
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Name</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">University</label>
        <input
          type="text"
          name="university"
          value={profile.university}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">GPA</label>
        <input
          type="number"
          name="gpa"
          value={profile.gpa}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Accomplishments</label>
        <textarea
          name="accomplishments"
          value={profile.accomplishments.join('\n')}
          onChange={handleAccomplishmentsChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Project Details</label>
        <textarea
          name="projectDetails"
          value={profile.projectDetails}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Assigned Team</label>
        <input
          type="text"
          name="assignedTeam"
          value={profile.assignedTeam}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Mentor</label>
        <input
          type="text"
          name="mentor"
          value={profile.mentor}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
      <button
        onClick={handleSave}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Save
      </button>
    </div>
  );
};

export default ProfileEdit;
