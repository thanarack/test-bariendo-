import { useState } from 'react';
import LayoutMobile from '../components/layout.mobile';
import SelectDate from '../components/select.date';
import {
  FloatLeftIcon,
  IconLeftArrow,
  Navbar, NewBookingButton, Title3Light, WarpButton, Select, SelectGroup, Title2Light, Hr, NoSlotTime
} from '../styles/common.style';
import getMonths from '../util/get.month';
import SelectTime from '../components/select.time';

function Book() {
  const [month, setMonth] = useState(`${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}`)
  const [day, setDay] = useState(1)
  const [idTime, setIdTime] = useState("")
  const [timeSlot,] = useState([])
  const months = getMonths()

  const onSetMonth = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(String(e.target.value))
    setDay(1)
  }

  return (
    <LayoutMobile>
      <Navbar>
        <div>
          <FloatLeftIcon><IconLeftArrow /></FloatLeftIcon>
        </div>
      </Navbar>

      <div style={{ marginTop: '16px' }}>
        <Title3Light>Booking Appointment</Title3Light>
      </div>

      <SelectGroup style={{ marginTop: '16px' }}>
        <Select>
          <option>Cardiologist</option>
          <option>Dentist</option>
        </Select>
        <Select defaultValue={month} onChange={onSetMonth}>
          {months.map(({ id, name }) => <option value={`${new Date().getFullYear()}-${String(id).padStart(2, '0')}`}>{name}</option>)}
        </Select>
      </SelectGroup>

      <div style={{ marginTop: '16px' }}>
        <Title2Light>Select Schedule</Title2Light>
      </div>

      <div style={{ marginTop: '8px' }}>
        <SelectDate day={day} month={+month.split('-')[1]} year={+month.split('-')[0]} setDay={setDay} />
      </div>

      <Hr />

      {timeSlot.length === 0 && <NoSlotTime style={{ marginTop: '16px' }}>No time slot available</NoSlotTime>}
      {timeSlot.length > 0 && (
        <div style={{ marginTop: '16px' }}>
          <SelectTime data={timeSlot} defaultValue={idTime} setTime={setIdTime} />
        </div>
      )}


      <Hr />

      <WarpButton>
        <NewBookingButton>Book now</NewBookingButton>
      </WarpButton>

    </LayoutMobile>
  );
}

export default Book;
