

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CalculateCard from "../reuseabelComponents/calculateCard"
import RevenueDashboard from "./RevenueDashboard"
import ActiveUsersDashboard from "./ActiveUsersDashboard"
import BookingsDashboard from "./BookingsDashboard"


const ReportAnalysisComponents = () => {
    
  return (
  
       <div className="w-full  mx-auto p-4 ">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-4xl font-medium text-primary ">Reports & Analytics</h1>
        <Select >
          <SelectTrigger className="w-[120px] bg-white border-[#EBEBEB] text-base text-primary">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="30 days">30 days</SelectItem>
            <SelectItem value="3 months">3 months</SelectItem>
            <SelectItem value="6 months">6 months</SelectItem>
            <SelectItem value="12 months">12 months</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <h2 className="text-xl text-primary font-semibold pb-5">Key Metrics</h2>

     <CalculateCard/>
     <RevenueDashboard/>
     <ActiveUsersDashboard/>
     <BookingsDashboard/>
    </div>
 
  
  )
}

export default ReportAnalysisComponents
