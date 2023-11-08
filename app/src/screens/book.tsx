import { useEffect, useState } from 'react';
import LayoutMobile from '../components/layout.mobile';
import SelectDate from '../components/select.date';
import {
  FloatLeftIcon,
  IconLeftArrow,
  Navbar,
  NewBookingButton,
  Title3Light,
  WarpButton,
  Select,
  SelectGroup,
  Title2Light,
  Hr,
} from '../styles/common.style';
import getMonths from '../util/get.month';
import SelectTime from '../components/select.time';
import { Link } from 'react-router-dom';
import useApiDoctors from '../hooks/useApiDoctors';
import { PREFIX_DATA } from '../api';
import { get } from 'lodash';
import { Book, User } from '../api/api.spec';
import initTimeSlot, { InitTimeSlot } from '../util/init.time.slot';
import useApiBook from '../hooks/useApiBook';
import useApiBookList from '../hooks/useApiBookList';

const currentYearMonth = `${new Date().getFullYear()}-${String(
  new Date().getMonth() + 1,
).padStart(2, '0')}`;
const defaultDay = 1;

function Book() {
  const [month, setMonth] = useState(currentYearMonth);
  const [day, setDay] = useState(defaultDay);
  const [doctorId, setDoctorId] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [timeSlot, setTimeSlot] = useState(
    initTimeSlot(`${currentYearMonth}-${defaultDay}`),
  );
  const months = getMonths();

  const apiDoctors = useApiDoctors();
  const apiBook = useApiBook();
  const apiBookList = useApiBookList();

  const onSetMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(String(e.target.value));
    setDay(1);
  };

  useEffect(() => {
    if (month && day) {
      setTimeSlot(initTimeSlot(`${month}-${day}`));
      setDateTime('');
    }
  }, [month, day]);

  useEffect(() => {
    if (!doctorId && apiDoctors.data) {
      setDoctorId(get(apiDoctors.data, 'data.data.[0].id', ''));
    }
  }, [apiDoctors, apiDoctors.isFetched, doctorId]);

  const onBook = () => {
    apiBook.mutate({
      doctor_id: doctorId,
      slot_start: dateTime,
    });
  };

  const isBookDisabled = !doctorId || !dateTime;

  const timeSlotData = get(apiBookList.data, 'data.data', []).map(
    (item: Book) => item.slot_start,
  );

  const timeWithBook = timeSlot.map((item: InitTimeSlot) => {
    if (timeSlotData.includes(item.dateTime)) {
      return {
        ...item,
        isBooked: true,
      };
    }
    return item;
  });

  return (
    <LayoutMobile>
      <Navbar>
        <div>
          <Link to="/appointments">
            <FloatLeftIcon>
              <IconLeftArrow />
            </FloatLeftIcon>
          </Link>
        </div>
      </Navbar>

      <div style={{ marginTop: '16px' }}>
        <Title3Light>Booking Appointment</Title3Light>
      </div>

      <SelectGroup style={{ marginTop: '16px' }}>
        <Select onChange={(e) => setDoctorId(e.target.value)}>
          {get(apiDoctors, PREFIX_DATA, []).map((item: User) => (
            <option value={item.id} key={item.id}>
              {item.doctorType.name}
            </option>
          ))}
        </Select>
        <Select defaultValue={month} onChange={onSetMonth}>
          {months.map(({ id, name }) => (
            <option
              value={`${new Date().getFullYear()}-${String(id).padStart(
                2,
                '0',
              )}`}
            >
              {name}
            </option>
          ))}
        </Select>
      </SelectGroup>

      <div style={{ marginTop: '16px' }}>
        <Title2Light>Select Schedule</Title2Light>
      </div>

      <div style={{ marginTop: '8px' }}>
        <SelectDate
          day={day}
          month={+month.split('-')[1]}
          year={+month.split('-')[0]}
          setDay={setDay}
        />
      </div>

      <Hr />

      <div style={{ marginTop: '16px' }}>
        <SelectTime
          data={timeWithBook}
          defaultValue={dateTime}
          setDateTime={setDateTime}
        />
      </div>

      <Hr />

      <WarpButton>
        <NewBookingButton
          disabled={isBookDisabled}
          type="button"
          onClick={onBook}
        >
          Book now
        </NewBookingButton>
      </WarpButton>
    </LayoutMobile>
  );
}

export default Book;
