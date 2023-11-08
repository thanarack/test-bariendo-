import dayjs from 'dayjs';

export interface InitTimeSlot {
  id: number;
  slotStart: string;
  dateTime: string;
  isBooked: boolean;
}

const initTimeSlot = (date: string): InitTimeSlot[] => {
  let startDate = dayjs(`${date} 08:00`);
  return Array.from({ length: 9 }, (_, index) => {
    const data = {
      id: index + 1,
      slotStart: startDate.format('hh:mm A'),
      dateTime: startDate.toISOString(),
      isBooked: false,
    };
    startDate = startDate.add(1, 'hour');
    return data;
  });
};

export default initTimeSlot;
