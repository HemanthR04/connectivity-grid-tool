import React from 'react'

const ApplicationCard = (props) => {

  const { application_name,application_description,primary_owner ,secondary} = props;
  
  return (
    <>
    <div className='bg-gray-800 w-full h-[100px] flex flex-col items-start justify-center rounded-md text-white p-4'> 
      <h1 className='text-bold  px-2 py-2 bg-slate-500 rounded mx-2'>{application_name}</h1>
      
     
    </div>

    </>
  )
}

export default ApplicationCard