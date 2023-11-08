/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import {
  SelectBoxDate, DateBox, DragBox, WarpDrag
} from '../styles/common.style';
import getDaysOfMonth from '../util/get.day.of.month';

function SelectDate(props: { day: number, month: number, year: number, setDay: (day: number) => void }) {

  const [position, setPosition] = useState(0);
  const days = getDaysOfMonth(props.month, props.year);

  useEffect(() => {
    if (props.month && props.year) {
      setPosition(0)
    }
  }, [props.month, props.year])

  const handleMouseDown = (event: any) => {
    event.preventDefault();
    const startX = event.clientX;

    const handleMouseMove = (event: any) => {
      event.preventDefault();
      const deltaX = event.clientX - startX;
      setPosition(position + deltaX);
    };

    const handleMouseUp = () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <WarpDrag>
      <DragBox style={{
        left: position,
      }} onMouseDown={handleMouseDown}>
        <SelectBoxDate>
          {days.map(({ day, dayName }) => (
            <DateBox isSelect={props.day === day} onClick={() => props.setDay(day)}>
              <span>{dayName}</span> <span>{day}</span></DateBox>
          ))}
        </SelectBoxDate>
      </DragBox>
    </WarpDrag>
  )
}

export default SelectDate
