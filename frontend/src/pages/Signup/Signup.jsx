import React from 'react';
import GenderCheckbox from './GenderCheckbox';

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-500'>
          Signup
          <span className='text-gray-700'> ChapApp</span>
        </h1>

        <form>
          <div className="mt-4">
            <label className='label'>
              <span className='text-base text-gray-400 label text'>Full Name</span>
            </label>
            <input type="text" placeholder='Enter Name' className='w-full input input-bordered h-18'/>
          </div>
          
          <div className="mt-4">
            <label className='label'>
              <span className='text-base text-gray-400 label text'>Username</span>
            </label>
            <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
          </div>

          <div className="mt-4">
            <label className='label'>
              <span className='text-base text-gray-400 label text'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'/>
          </div>
          
          <div className="mt-4">
            <label className='label'>
              <span className='text-base text-gray-400 label text'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
          </div>

          <GenderCheckbox/>

          <a href='#' className='text-sm text-gray-400 hover:underline hover:text-gray-200 mt-2 inline-block'>
            Already have an account?
          </a>

          <div className="mt-6">
            <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;


// STARTER CODE GOES HERE
// import React from 'react';
// import GenderCheckbox from './GenderCheckbox';

// const Signup = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-500'>
//           Signup
//           <span className='text-gray-700'> ChapApp</span>
//         </h1>

//         <form>
//           <div className="mt-4">
//             <label className='label'>
//               <span className='text-base text-gray-400 label text'>Full Name</span>
//             </label>
//             <input type="text" placeholder='Enter Name' className='w-full input input-bordered h-18'/>
//           </div>
          
//           <div className="mt-4">
//             <label className='label'>
//               <span className='text-base text-gray-400 label text'>Username</span>
//             </label>
//             <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
//           </div>

//           <div className="mt-4">
//             <label className='label'>
//               <span className='text-base text-gray-400 label text'>Password</span>
//             </label>
//             <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'/>
//           </div>
          
//           <div className="mt-4">
//             <label className='label'>
//               <span className='text-base text-gray-400 label text'>Confirm Password</span>
//             </label>
//             <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10'/>
//           </div>

//           <GenderCheckbox/>
          
//           <a href='#' className='text-sm text-gray-400 hover:underline hover:text-gray-200 mt-2 inline-block'>
//             Already have an account?
//           </a>

//           <div className="mt-6">
//             <button className='btn btn-block btn-sm mt-2 border border-slate-700'>Sign Up</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;

