import Calendar from "./Calendar";
import moment, {unitOfTime} from "moment";

export default class CalendarDay implements Calendar {
  selectDate: moment.Moment;
  readonly type: moment.unitOfTime.StartOf;

  constructor(date = moment(), type: unitOfTime.StartOf = 'isoWeek') {
    this.selectDate = date
    this.type = type
  }

  get gridCalendar(): moment.Moment[] {
    return [this.selectDate]
  }

  gridCalendarWithTime(start = 0, end = 24, step = 1): moment.Moment[] {
    const arr = []

    for (let hour = start; hour < end / step; hour++) {
      const startDay = this.selectDate.startOf('day')
      arr.push(
        moment(startDay.add(hour, 'hour'))
      )
    }

    return arr
  }

  swapNextDate(): void {
    this.selectDate.add(1, 'day')
  }

  swapPrevDate(): void {
    this.selectDate.add(-1, 'day')
  }

}