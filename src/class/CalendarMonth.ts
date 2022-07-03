import Calendar from "./Calendar";
import moment from "moment";
import {ICalendar} from "../interface/ICalendar";
import {OptionCalendar} from "../interface/OptionCalendar";

export default class CalendarMonth extends Calendar implements ICalendar {

  constructor(props?: OptionCalendar) {
    super({
      date: props?.date,
      typeCalendar: props?.typeCalendar || 'month',
      startDay: props?.startDay
    });
  }

  get firstDay(): moment.Moment {
    return moment(this.selectDate.startOf(this.typeStart))
  }

  get lastDay(): moment.Moment {
    return moment(this.selectDate.endOf(this.typeStart))
  }

  get daysPrevMonth(): moment.Moment[] {
    const amountPrevDays = this.firstDay.isoWeekday() - (this.startDay === 'sunday' ? 0 : 1)
    let dayPrev = []

    for (let i = 1; i <= amountPrevDays; i++) {
      const date = moment(this.firstDay)
      dayPrev.push(date.add(-i, 'day'))
    }
    return dayPrev.reverse()
  }

  get daysNextMonth(): moment.Moment[] {
    let amountNextDays
    if (this.startDay === 'sunday') {
      amountNextDays = 6 - this.lastDay.weekday()
    } else {
      amountNextDays = 7 - this.lastDay.isoWeekday()
    }


    const dayNext = []

    for (let i = 1; i <= amountNextDays; i++) {
      const date = moment(this.lastDay)
      dayNext.push(date.add(i, 'day'))
    }
    return dayNext
  }

  get daysMonth(): moment.Moment[] {
    const days = []
    for (let i = 0; i < this.selectDate.daysInMonth(); i++) {
      const date = moment(this.firstDay)
      days.push(date.add(i, 'day'))
    }
    return days
  }

  gridCalendar(): moment.Moment[] {
    return [
      ...this.daysPrevMonth,
      ...this.daysMonth,
      ...this.daysNextMonth
    ];
  }
}