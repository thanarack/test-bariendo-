import AppointmentItem from '../components/appointment.item';
import LayoutMobile from '../components/layout.mobile';
import {
  DateTitle,
  FloatIcon,
  IconLogout,
  IconPlus,
  Navbar, NewBookingButton, Title, WarpButton
} from '../styles/common.style';


function Appointments() {
  return (
    <LayoutMobile>
      <Navbar>
        <div />
        <Title>Booked Appointment</Title>
        <div>
          <FloatIcon><IconLogout /></FloatIcon>
        </div>
      </Navbar>

      <div style={{ marginTop: '16px' }}>
        <DateTitle>Today</DateTitle>
        <AppointmentItem />
      </div>

      <WarpButton>
        <NewBookingButton><IconPlus /> Booking Appointment</NewBookingButton>
      </WarpButton>

    </LayoutMobile>
  );
}

export default Appointments;
