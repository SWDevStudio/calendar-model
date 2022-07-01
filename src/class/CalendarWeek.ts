import Calendar from "./Calendar";
import moment, {unitOfTime} from "moment";
import {ICalendar} from "../interface/ICalendar";
import {OptionCalendar} from "../interface/OptionCalendar";

export default class CalendarWeek extends Calendar implements ICalendar {

  constructor(props?: OptionCalendar) {
    super({
      date: props.date,
      typeCalendar: props?.typeCalendar || 'week',
      typeStart: props.typeStart || 'isoWeek'
    });
  }

  gridCalendar(): moment.Moment[] {
    const firstDayOfWeek = moment(this.selectDate.startOf(this.typeStart)) // this.date.startOf(CALENDAR_TYPE.MONTH)
    // const lastDayOfWeek = moment(this.date.endOf(CALENDAR_TYPE.WEEK))

    const days = []
    for (let i = 0; i < 7; i++) {
      const date = moment(firstDayOfWeek)
      days.push(date.add(i, 'day'))
    }

    return days
  }

  /**
   * @description Возвращает массив моментов, с часами на каждый день.
   * @param start {number} Начало отсчета для сетки в часах в 24 формате
   * @param end  {number} Конец отсчета для сетки в часах в 24 формате
   * @param step {number} Шаг цикла 0.5 - пол часа, 1 - час 2 - два часа и т.д
   */
  gridCalendarWithTime(start = 0, end = 24, step = 1): moment.Moment[] {
    const arr = []
    const startDay = this.selectDate.startOf(this.typeStart)
    for (let hour = start; hour < end / step; hour++) {
      this.gridCalendar().forEach(i => {
        arr.push(
          moment(i.add(hour * step, 'hour'))
        )
      })
    }

    return arr
  }
}