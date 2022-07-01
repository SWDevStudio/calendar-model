import moment, {unitOfTime} from "moment";

export type OptionCalendar = {
  date?: moment.Moment,
  typeStart?: unitOfTime.StartOf,
  typeCalendar?: moment.DurationInputArg2
}