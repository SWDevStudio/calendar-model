import moment, {unitOfTime} from "moment";

export type OptionCalendar = {
  date?: moment.Moment,
  typeCalendar?: moment.DurationInputArg2,
  startDay?: 'monday' | 'sunday'
}