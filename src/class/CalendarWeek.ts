import Calendar from "./Calendar";
import moment, {unitOfTime} from "moment";

export default class CalendarWeek implements Calendar {
  selectDate: moment.Moment;
  readonly type: unitOfTime.StartOf

  constructor(date = moment(), type: unitOfTime.StartOf = 'isoWeek') {
    this.selectDate = date
    this.type = type
  }

  get gridCalendar(): moment.Moment[] {
    const firstDayOfWeek = moment(this.selectDate.startOf(this.type)) // this.date.startOf(CALENDAR_TYPE.MONTH)
    // const lastDayOfWeek = moment(this.date.endOf(CALENDAR_TYPE.WEEK))

    const days = []
    for (let i = 0; i < 7; i++) {
      const date = moment(firstDayOfWeek)
      days.push(date.add(i, 'day'))
    }

    return days
  }

  swapNextDate(): void {
    this.selectDate.add(1, 'week')
  }

  swapPrevDate(): void {
    this.selectDate.add(-1, 'week')
  }
}