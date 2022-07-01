import moment, {unitOfTime} from 'moment'
import {ICalendar} from "../interface/ICalendar";
import {OptionCalendar} from "../interface/OptionCalendar";

export default class Calendar implements ICalendar {
  readonly typeStart!: unitOfTime.StartOf

  readonly typeCalendar!: moment.DurationInputArg2

  selectDate!: moment.Moment

  constructor({
    date, typeStart,typeCalendar
  }: OptionCalendar) {
    this.selectDate = date || moment()

    if (!typeCalendar) {
      throw new Error('Укажите тип календаря')
    }
    this.typeCalendar = typeCalendar

    if (!typeStart) {
      switch (typeCalendar) {
        case "week":
          this.typeStart = 'isoWeek'
          break
        case "day":
          this.typeStart = 'day'
          break
        case "year":
          this.typeStart = 'year'
          break
        default:
          this.typeStart = 'month'
      }
    } else  {
      this.typeStart = typeStart
    }
  }


  swapNextDate(): void {
    this.selectDate.add(1, this.typeCalendar)
  }

  swapPrevDate(): void {
    this.selectDate.add(-1, this.typeCalendar)
  }

  gridCalendar(): moment.Moment[] {
    return []
  }
}
