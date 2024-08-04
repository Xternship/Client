import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import LandingPage from './components/LandingPage';
import ProfileDisplay from './profile/ProfileDisplay'; 
import ProfileEdit from './profile/ProfileEdit';
import ProfilePage from './profile/ProfilePage';
import WelcomePage from './components/welcomePage';
import Admin from './components/dashboard/AdminDashboard';
import Evaluator from './components/dashboard/EvaluatorDash';
import Intern from './components/dashboard/InternDash';  // Corrected import
import Management from './components/dashboard/ManagementDash';
import Mentor from './components/dashboard/MentorDash';
import PrivateRoute from '../src/PrivateRoute';

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
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profiledisplay" element={<ProfileDisplay {...mockProfile} />} />
        <Route path="/profileedit" element={<ProfileEdit initialProfile={mockProfile} onSave={handleSave} />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/welcome" element={<WelcomePage />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute allowedRoles={['Admin']} />}>
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route element={<PrivateRoute allowedRoles={['Evaluator']} />}>
          <Route path="/evaluator" element={<Evaluator />} />
        </Route>
        <Route element={<PrivateRoute allowedRoles={['Mentor']} />}>
          <Route path="/mentor" element={<Mentor />} />
        </Route>
        <Route element={<PrivateRoute allowedRoles={['Intern']} />}>
          <Route path="/intern" element={<Intern />} />
        </Route>
        <Route element={<PrivateRoute allowedRoles={['Management']} />}>
          <Route path="/management" element={<Management />} />
        </Route>

        {/* Redirect all other routes to the landing page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
