import moment, {unitOfTime} from "moment";

export type OptionCalendar = {
  date?: moment.Moment | string,
  typeCalendar?: moment.DurationInputArg2,
  startDay?: 'monday' | 'sunday',
  format?: moment.MomentFormatSpecification
}