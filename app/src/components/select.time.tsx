import dayjs from "dayjs"
import { SelectTimeBox, TimeBox } from "../styles/common.style"

const SelectTime = (props: { data: { id: string, slotStart: string, status: string }[],defaultValue: string, setTime: (id: string) => void }) => {
  const { data } = props

  return (
    <SelectTimeBox>
      {data.map(({ id, slotStart }) => (
        <TimeBox isActive={props.defaultValue === id} key={id} onClick={() => props.setTime(id)}>
          {dayjs(slotStart).format('HH.mm A')}
        </TimeBox>
      ))}
    </SelectTimeBox>
  )
}

export default SelectTime