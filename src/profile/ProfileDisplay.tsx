import React from 'react';

interface ProfileProps {
  name: string;
  university: string;
  gpa: number;
  accomplishments: string[];
  projectDetails: string;
  assignedTeam: string;
  mentor: string;
}

const ProfileDisplay: React.FC<ProfileProps> = ({
  name,
  university,
  gpa,
  accomplishments,
  projectDetails,
  assignedTeam,
  mentor,
}) => {
  return (
    <div className="p-4 max-w-lg mx-auto bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">{name}</h1>
      <p className="text-gray-700 mb-2"><strong>University:</strong> {university}</p>
      <p className="text-gray-700 mb-2"><strong>GPA:</strong> {gpa}</p>
      <p className="text-gray-700 mb-2"><strong>Accomplishments:</strong></p>
      <ul className="list-disc pl-5 mb-2">
        {accomplishments.map((accomplishment, index) => (
          <li key={index} className="text-gray-700">{accomplishment}</li>
        ))}
      </ul>
      <p className="text-gray-700 mb-2"><strong>Project Details:</strong> {projectDetails}</p>
      <p className="text-gray-700 mb-2"><strong>Assigned Team:</strong> {assignedTeam}</p>
      <p className="text-gray-700 mb-2"><strong>Mentor:</strong> {mentor}</p>
    </div>
  );
};

export default ProfileDisplay;
