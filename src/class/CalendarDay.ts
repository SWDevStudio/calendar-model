import Calendar from "./Calendar";
import moment from "moment";
import {OptionCalendar} from "../interface/OptionCalendar";
import {ICalendar} from "../interface/ICalendar";

export default class CalendarDay extends Calendar implements ICalendar {
  constructor(props?: OptionCalendar) {
    super({
      date: props?.date,
      typeCalendar: props?.typeCalendar || 'day',
    });
  }

  gridCalendar(start = 0, end = 24, step = 1): moment.Moment[] {
    const arr = []

    for (let hour = start; hour < end / step; hour++) {
      const startDay = this.selectDate.startOf(this.typeStart)
      arr.push(
        moment(startDay.add(hour, 'hour'))
      )
    }

    return arr
  }
}