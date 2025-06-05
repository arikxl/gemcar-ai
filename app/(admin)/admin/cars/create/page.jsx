import React from 'react'
import AddCarForm from '../_components/AddCarForm'


export const metadata = {
    title: "Add New Car | Vehicle Admin",
    description: "Add a new car to the marketplace"
}


const CreateCarPage = () => {
  return (
      <div className='p-6'>
          <h1 className='text-2xl font-bold mb-6'>Add New Car</h1>

          <AddCarForm />
    </div>
  )
}

export default CreateCarPage