import moment, {unitOfTime} from 'moment'

export default abstract class Calendar {
  readonly type!: unitOfTime.StartOf

  selectDate!: moment.Moment

  swapNextDate(): void {}

  swapPrevDate(): void {}

  get gridCalendar(): moment.Moment[] {
    return []
  }
}
