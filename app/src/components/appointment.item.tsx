import { ApLocation, CardAppointment, IconPin, ApBoxLine, ApType, CardGroup } from "../styles/common.style"

const AppointmentItem = () => {
  return (
    <CardGroup>
      <CardAppointment>
        <ApBoxLine>
          <div>DR. XX XXXX</div>
          <div>11:00 AM</div>
        </ApBoxLine>
        <ApBoxLine>
          <ApType>Cardiologist</ApType>
          <ApLocation>
            <IconPin />
            Davin Clinic
          </ApLocation>
        </ApBoxLine>
      </CardAppointment>
    </CardGroup>
  )
}

export default AppointmentItem