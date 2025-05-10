import CalculateCard from "@/components/reuseabelComponents/calculateCard";
import Title from "@/components/reuseabelComponents/Title";
import Wrapper from "@/components/wrapper/wrapper";

const DashboardPage = () => {
  return (
    <Wrapper>
      <div className="space-y-4">
        <Title>Admin Dashboard</Title>
        <CalculateCard />
      </div>
    </Wrapper>
  );
};

export default DashboardPage;
