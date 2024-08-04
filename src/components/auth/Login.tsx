import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '@/firebaseConfig';  
import axios from 'axios';

interface IFormInput {
  email: string;
  password: string;
}

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isValid } } = useForm<IFormInput>({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });
  const [serverError, setServerError] = useState('');

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    setServerError('');
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
      const user = userCredential.user;
      const token = await user.getIdToken();
  
      const response = await axios.post('https://localhost:7162/v1/users/login', {
        email: data.email,
        firebasetoken: token
      });
  
      if (response.data.success) {
        localStorage.setItem('token', token);
        localStorage.setItem('role', response.data.role);
  
        switch (response.data.role) {
          case 'Admin':
            navigate('/admin');
            break;
          case 'Evaluator':
            navigate('/evaluator');
            break;
          case 'Mentor':
            navigate('/mentor');
            break;
          case 'Intern':
            navigate('/intern');
            break;
          case 'Management':
            navigate('/management');
            break;
          default:
            navigate('/welcome');
        }
      } else {
        setServerError(response.data.message);
      }
    } catch (error) {
      setServerError((error as Error).message);
    }
  };
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-color-primary">
      <div className="bg-color-tertiary p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Login</h2>
        {serverError && <p className="text-red-500 mb-4">{serverError}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Email"
              {...register('email')}
              className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
            />
            {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
              className={`w-full p-3 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
            />
            {errors.password && <p className="text-red-500 mt-1">{errors.password.message}</p>}
          </div>
          <button
            type="submit"
            className={`w-full p-3 text-white rounded ${isValid ? 'bg-color-accent hover:bg-color-accent-dark' : 'bg-gray-400 cursor-not-allowed'}`}
            style={{ backgroundColor: isValid ? '#3B82F6' : '#A0AEC0' }}
            disabled={!isValid}
          >
            Log in
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
