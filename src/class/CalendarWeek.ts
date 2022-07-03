import Calendar from "./Calendar";
import moment, {unitOfTime} from "moment";
import {ICalendar} from "../interface/ICalendar";
import {OptionCalendar} from "../interface/OptionCalendar";

export default class CalendarWeek extends Calendar implements ICalendar {

  constructor(props?: OptionCalendar) {
    super({
      date: props?.date,
      typeCalendar: props?.typeCalendar || 'week',
      startDay: props?.startDay
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
}