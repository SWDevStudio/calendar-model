import moment from 'moment'

export default abstract class Calendar {
  type!: moment.DurationInputArg2

  selectDate!: moment.Moment

  swapNextDate(): void {}

  swapPrevDate(): void {}

  get gridCalendar(): moment.Moment[] {
    return []
  }
}
