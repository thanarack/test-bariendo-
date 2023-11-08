import { useNavigate } from 'react-router-dom';
import LayoutMobile from '../components/layout.mobile';
import {
  FloatRightIcon,
  Hr,
  IconLogout,
  IconPlus,
  Navbar,
  NewBookingButton,
  NoSlotTime,
  Title,
  WarpButton,
  WarpScroll,
} from '../styles/common.style';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from '../store/user.slice';
import useApiBookRecent from '../hooks/useApiBookRecent';
import { get } from 'lodash';
import { RootState } from '../store';
import AppointmentsGroup from '../components/appointments.group';

function Appointments() {
  const user = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const apiBookListRecent = useApiBookRecent({ role: user.role });

  const onLogout = () => {
    localStorage.removeItem('token');
    dispatch(setLogout());
    navigate('/');
  };

  const rows = get(apiBookListRecent.data, 'data.data', []);

  return (
    <LayoutMobile>
      <Navbar>
        <div />
        {user.role === 'PATIENT' && <Title>Booked Appointment</Title>}
        {user.role !== 'PATIENT' && <Title>Upcoming Appointment</Title>}
        <div>
          <FloatRightIcon role="button" onClick={onLogout}>
            <IconLogout />
          </FloatRightIcon>
        </div>
      </Navbar>

      {rows.length === 0 && (
        <>
          <Hr />
          <NoSlotTime>Appointments not found</NoSlotTime>
        </>
      )}
      {rows.length > 0 && (
        <WarpScroll>
          <AppointmentsGroup data={rows} />
        </WarpScroll>
      )}

      {user.role === 'PATIENT' && (
        <WarpButton>
          <NewBookingButton role="button" onClick={() => navigate('/book')}>
            <IconPlus /> Booking Appointment
          </NewBookingButton>
        </WarpButton>
      )}
    </LayoutMobile>
  );
}

export default Appointments;
