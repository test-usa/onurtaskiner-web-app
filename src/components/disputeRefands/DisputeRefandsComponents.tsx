import React from 'react'
import CalculateCard from '../reuseabelComponents/calculateCard'
import DisputeList from './DisputeList'
import Wrapper from '../wrapper/wrapper'

const DisputeRefandsComponents = () => {
  return (
<Wrapper>
  
       <div className="w-full  mx-auto  ">
      <div className="flex justify-between items-center mb-10">
        <h1 className="md:text-4xl text-2xl font-medium text-primary ">Dispute & Refund Management</h1>
        
      </div>
      <h2 className="text-xl text-primary font-semibold pb-5">Key Metrics</h2>
              <CalculateCard/>
              <DisputeList/>
    </div>
</Wrapper>
  
  )
}

export default DisputeRefandsComponents
