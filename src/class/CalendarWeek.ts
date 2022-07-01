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

  /**
   * @description Возвращает массив моментов, с часами на каждый день.
   * @param start {number} Начало отсчета для сетки в часах в 24 формате
   * @param end  {number} Конец отсчета для сетки в часах в 24 формате
   * @param step {number} Шаг цикла 0.5 - пол часа, 1 - час 2 - два часа и т.д
   */
  gridCalendarWithTime(start = 0, end = 24, step = 1): moment.Moment[] {
    const arr = []
    const startDay = this.selectDate.startOf('isoWeek')
    for (let hour = start; hour < end / step; hour++) {
      this.gridCalendar.forEach(i => {
        arr.push(
          moment(i.add(hour * step, 'hour'))
        )
      })
    }

    return arr
  }
}