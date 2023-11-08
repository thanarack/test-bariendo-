import dayjs from 'dayjs';
import { Book } from '../api/api.spec';
import {
  ApLocation,
  CardAppointment,
  IconPin,
  ApBoxLine,
  CardGroup,
} from '../styles/common.style';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect, useState } from 'react';
import { get } from 'lodash';

interface AppointmentItemProps {
  item: Book;
}

const AppointmentItem = (props: AppointmentItemProps) => {
  const { item } = props;
  const user = useSelector((state: RootState) => state.user);
  const [fullName, setFullName] = useState('');
  const [doctorType, setDoctorType] = useState('-');

  // Get date when ready
  useEffect(() => {
    if (user.role === 'DOCTOR') {
      setFullName(
        `${get(item, 'user.first_name')} ${get(item, 'user.last_name')}`,
      );
    } else if (user.role === 'PATIENT') {
      setFullName(
        `${get(item, 'doctor.first_name')} ${get(item, 'doctor.last_name')}`,
      );
      setDoctorType(get(item, 'doctor.doctorType.name', ''));
    }
  }, [user.role, item]);

  return (
    <>
      <CardGroup>
        <CardAppointment>
          <ApBoxLine>
            <div>{fullName}</div>
            <div>{dayjs(props.item.slot_start).format('hh:mm A')}</div>
          </ApBoxLine>
          <ApBoxLine>
            {doctorType && <div>{doctorType}</div>}
            <ApLocation>
              <IconPin />
              Davin Clinic
            </ApLocation>
          </ApBoxLine>
        </CardAppointment>
      </CardGroup>
    </>
  );
};

export default AppointmentItem;
