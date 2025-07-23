import React from 'react'

export const Card = ({icon, title, description}) => {
  return (
    <div className="w-[20vw] gap-6 h-[20vw] bg-white px-6 py-4 rounded-lg shadow-md flex flex-col justify-center items-center">
      <div className='p-2 rounded-full bg-blue-500 text-white'>{icon}</div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
