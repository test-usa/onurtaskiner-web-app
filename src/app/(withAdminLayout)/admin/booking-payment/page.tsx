import { BookingPayment } from "@/components/AdminPage/VenueManagement/BookingPayment";
import CalculateCard from "@/components/reuseabelComponents/calculateCard";
import Title from "@/components/reuseabelComponents/Title";
import Wrapper from "@/components/wrapper/wrapper";

const bookingPaymentPage = () => {
  return (
    <Wrapper>
      <div className="space-y-4">
        <Title>Booking Payment</Title>
        <CalculateCard />
        <BookingPayment />
      </div>
    </Wrapper>
  );
};

export default bookingPaymentPage;
