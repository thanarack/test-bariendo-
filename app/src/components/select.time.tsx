import dayjs from 'dayjs';
import { SelectTimeBox, TimeBox } from '../styles/common.style';

interface SelectTimeProps {
  data: {
    id: number;
    slotStart: string;
    isBooked: boolean;
    dateTime: string;
  }[];
  defaultValue: string;
  setDateTime: (id: string) => void;
}

const SelectTime = (props: SelectTimeProps) => {
  const { data, defaultValue } = props;

  return (
    <SelectTimeBox>
      {data.map(({ id, slotStart, dateTime, isBooked }) => (
        <TimeBox
          isActive={dayjs(defaultValue).isSame(dateTime)}
          disabled={isBooked || dayjs(dateTime).isBefore(dayjs())}
          key={id}
          onClick={() => {
            !isBooked && props.setDateTime(dateTime);
          }}
        >
          {slotStart}
        </TimeBox>
      ))}
    </SelectTimeBox>
  );
};

export default SelectTime;
