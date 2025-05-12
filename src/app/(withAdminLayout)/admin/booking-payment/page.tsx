import { BookingPayment } from "@/components/AdminPage/VenueManagement/BookingPayment";
import Conversation from "@/components/bookingPayment/Conversation";
import CalculateCard from "@/components/reuseabelComponents/calculateCard";
import Title from "@/components/reuseabelComponents/Title";
import Wrapper from "@/components/wrapper/wrapper";

const bookingPaymentPage = () => {
  return (
    <div className="">
      <Wrapper>
        <div className="space-y-4 ">
          <Title title="Booking Payment" />
          <CalculateCard />
          <BookingPayment />
        </div>
      </Wrapper>
    </div>
  );
};

export default bookingPaymentPage;
