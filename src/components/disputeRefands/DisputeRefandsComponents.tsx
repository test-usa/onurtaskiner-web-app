import React from 'react'
import CalculateCard from '../reuseabelComponents/calculateCard'
import DisputeList from './DisputeList'

const DisputeRefandsComponents = () => {
  return (

       <div className="w-full  mx-auto p-4 ">
      <div className="flex justify-between items-center mb-10">
        <h1 className="md:text-4xl text-2xl font-medium text-primary ">Dispute & Refund Management</h1>
        
      </div>
      <h2 className="text-xl text-primary font-semibold pb-5">Key Metrics</h2>
              <CalculateCard/>
              <DisputeList/>
    </div>
  
  )
}

export default DisputeRefandsComponents
