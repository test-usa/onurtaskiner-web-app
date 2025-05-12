import Professionals from "@/components/Dashboard/proffesionals";
import Tabs from "@/components/Dashboard/Tabs";
import CalculateCard from "@/components/reuseabelComponents/calculateCard";
import Title from "@/components/reuseabelComponents/Title";
import AllCharts from "@/components/Dashboard/AllCharts";
import Wrapper from "@/components/wrapper/wrapper";
import { Calendar } from "@/components/Dashboard/Calendar";
import { ActivityTable } from "@/components/Dashboard/ActivityTable";

const DashboardPage = () => {
  return (
    <Wrapper>
      <div className="w-full  min-h-screen space-y-4 ">
        <Title title="Admin Dashboard" />
        <Professionals />
        <Tabs />
        <div className="space-y-5">
          <h1 className="text-[var(--color-accent)] tracking-[-0.4px] leading-[12px] sm:leading-[24px] font-semibold">
            Key Metrics
          </h1>
          <CalculateCard />
        </div>
        <div className="space-y-5">
          <h1 className="text-[var(--color-accent)] tracking-[-0.4px] leading-[12px] sm:leading-[24px] font-semibold">
            Booking Trends & Revenue Insights
          </h1>
          <AllCharts />
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 pt-3">
          <ActivityTable />
          <Calendar />
        </div>
      </div>
    </Wrapper>
  );
};

export default DashboardPage;
