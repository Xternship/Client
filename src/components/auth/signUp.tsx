import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface SignUpFormInputs {
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

const schema = yup.object().shape({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  role: yup.string().required('Role is required'),
});

const SignUp: React.FC = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { register, handleSubmit, formState: { errors, isValid, isSubmitting } } = useForm<SignUpFormInputs>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    setError('');
    setSuccess('');
    try {
      // Call the backend API to register the user
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        setSuccess('User registered successfully! Check email for login credentials.');
      } else {
        throw new Error('Failed to register user.');
      }
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-color-primary">
      <div className="bg-color-tertiary p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-700">Sign Up</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              {...register('username')}
              className={`w-full p-3 border ${errors.username ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>
          {/* Email */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email')}
              className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          {/* First Name */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">First Name</label>
            <input
              type="text"
              {...register('firstName')}
              className={`w-full p-3 border ${errors.firstName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
            />
            {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
          </div>
          {/* Last Name */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              {...register('lastName')}
              className={`w-full p-3 border ${errors.lastName ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
            />
            {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
          </div>
          {/* Role */}
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">Role</label>
            <input
              type="text"
              {...register('role')}
              className={`w-full p-3 border ${errors.role ? 'border-red-500' : 'border-gray-300'} rounded focus:outline-none focus:border-blue-500`}
            />
            {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
          </div>
          <button
            type="submit"
            disabled={!isValid || isSubmitting}
            className={`w-full p-3 text-white rounded ${!isValid || isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-color-accent hover:bg-color-accent-dark'}`}
            style={{ backgroundColor: isValid && !isSubmitting ? '#3B82F6' : '#A0AEC0' }}
            >
            {isSubmitting ? 'Submitting...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
