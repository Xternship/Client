import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LandingPage from './components/LandingPage';
import ProfileDisplay from './profile/ProfileDisplay'; 
import ProfileEdit from './profile/ProfileEdit';
import ProfilePage from './profile/ProfilePage';

const mockProfile = {
  name: 'John Doe',
  university: 'University A',
  gpa: 3.8,
  accomplishments: ['Completed Project X', 'Won Coding Challenge'],
  projectDetails: 'Developed a web application using React.',
  assignedTeam: 'Team Alpha',
  mentor: 'Mentor A',
};

const handleSave = (updatedProfile: typeof mockProfile) => {
  console.log('Profile saved:', updatedProfile);
  
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/profiledisplay"
          element={<ProfileDisplay {...mockProfile} />} 
        />
        <Route
          path="/profileedit"
          element={<ProfileEdit initialProfile={mockProfile} onSave={handleSave} />} 
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
