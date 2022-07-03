import moment, {unitOfTime} from 'moment'
import {ICalendar} from "../interface/ICalendar";
import {OptionCalendar} from "../interface/OptionCalendar";

export default class Calendar implements ICalendar {
  readonly typeStart!: unitOfTime.StartOf

  readonly typeCalendar!: moment.DurationInputArg2

  startDay: 'monday' | 'sunday'

  selectDate!: moment.Moment

  constructor({
    date, typeCalendar, startDay
  }: OptionCalendar) {
    this.selectDate = date || moment()

    if (!typeCalendar) {
      throw new Error('Укажите тип календаря')
    }
    this.typeCalendar = typeCalendar
    this.startDay = startDay || 'monday'

    switch (typeCalendar) {
      case "week":
        this.typeStart =  this.startDay === 'monday' ? 'isoWeek' : 'week'
        break
      case "day":
        this.typeStart = 'day'
        break
      case "year":
        this.typeStart = 'year'
        break
      case "month":
        this.typeStart = 'month'
        break
      default:
        throw new Error('Не удалось определить тип календаря.')
    }
  }


  swapNextDate(): void {
    this.selectDate.add(1, this.typeCalendar)
  }

  swapPrevDate(): void {
    this.selectDate.add(-1, this.typeCalendar)
  }

  setDate(date = moment()) {
    this.selectDate = date
  }

  gridCalendar(): moment.Moment[] {
    return []
  }
}
