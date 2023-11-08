import AppointmentItem from '../components/appointment.item';
import LayoutMobile from '../components/layout.mobile';
import {
  DateTitle,
  FloatRightIcon,
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
          <FloatRightIcon><IconLogout /></FloatRightIcon>
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
