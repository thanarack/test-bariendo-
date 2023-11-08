import { AppointmentGroup, DateTitle } from '../styles/common.style';
import { Book } from '../api/api.spec';
import AppointmentItem from './appointment.item';
import React from 'react';
import dayjs from 'dayjs';

interface AppointmentsGroupProps {
  data: Book[];
}

const mapData = (data: Book[]) => {
  const date: string[] = [];
  const ids: string[] = [];
  data.forEach((item) => {
    const dateItem = dayjs(item.slot_start).format('YYYY-MM-DD');
    if (!date.includes(dateItem)) {
      date.push(dateItem);
      ids.push(item.id);
    }
  });

  return ids;
};

const AppointmentsGroup = (props: AppointmentsGroupProps) => {
  const { data } = props;
  const getMapDateDate = mapData(data);

  return (
    <AppointmentGroup style={{ marginTop: '16px' }}>
      {data.map((item: Book, index: number) => (
        <React.Fragment key={index}>
          {getMapDateDate.includes(item.id) && (
            <DateTitle>
              {dayjs().format('YYYY-MM-DD') ===
              dayjs(item.slot_start).format('YYYY-MM-DD')
                ? 'Today'
                : dayjs(item.slot_start).format('DD MMMM YYYY')}
            </DateTitle>
          )}

          <AppointmentItem key={index} item={item} />
        </React.Fragment>
      ))}
    </AppointmentGroup>
  );
};

export default AppointmentsGroup;
