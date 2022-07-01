import Calendar from "./Calendar";
import moment, {unitOfTime} from "moment";
import {ICalendar} from "../interface/ICalendar";
import {OptionCalendar} from "../interface/OptionCalendar";
export default class CalendarYear extends Calendar implements ICalendar {
  constructor(props?: OptionCalendar) {
    super({
      date: props?.date,
      typeCalendar: props?.typeCalendar || 'year',
      typeStart: props?.typeStart || 'year'
    });
  }

  gridCalendar(): moment.Moment[] {
    const arr = []
    for (let i = 0; i < 12; i++) {
      const startYear = this.selectDate.startOf(this.typeStart)
      arr.push(moment(startYear.add(i, 'month')))
    }
    return arr;
  }
}