import Calendar from "./Calendar";
import moment from "moment";
import {TIME_FORMAT} from "../data/TIME_FORMAT";

export default class CalendarMonth implements Calendar {
  type: moment.DurationInputArg2 = 'month';

  selectDate: moment.Moment;

  constructor(date: moment.Moment = moment()) {
    this.selectDate = date
  }

  get firstDay(): moment.Moment {
    return moment(this.selectDate.startOf(this.type))
  }

  get lastDay(): moment.Moment {
    return moment(this.selectDate.endOf(this.type))
  }

  get daysPrevMonth(): moment.Moment[] {
    const amountPrevDays = this.firstDay.isoWeekday() - 1
    let dayPrev = []

    for (let i = 1; i <= amountPrevDays; i++) {
      const date = moment(this.firstDay)
      dayPrev.push(date.add(-i, 'day'))
    }
    return dayPrev.reverse()
  }

  get daysNextMonth(): moment.Moment[] {
    const amountNextDays = 7 - this.lastDay.isoWeekday()
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

  get gridCalendar(): any[] {
    return [
      ...this.daysPrevMonth.map(i => i.format(TIME_FORMAT)),
      ...this.daysMonth.map(i => i.format(TIME_FORMAT)),
      ...this.daysNextMonth.map(i => i.format(TIME_FORMAT))
    ];
  }

  swapNextDate(): void {
    this.selectDate.add(1, this.type)
  }

  swapPrevDate(): void {
    this.selectDate.add(-1, this.type)
  }
}