import moment, {unitOfTime} from "moment";

export interface ICalendar {
  readonly typeStart: unitOfTime.StartOf
  readonly typeCalendar: moment.DurationInputArg2
  selectDate: moment.Moment
  gridCalendar(start?: number, end?: number, step?:number): moment.Moment[]
}