import CalendarYear from "./class/CalendarYear";
import CalendarWeek from "./class/CalendarWeek";
import CalendarDay from "./class/CalendarDay";
import CalendarMonth from "./class/CalendarMonth";

const calendarWeek = new CalendarMonth({
  startDay: 'sunday'
})

console.log(calendarWeek.gridCalendar())

export {
  CalendarDay,
  CalendarMonth,
  CalendarWeek,
  CalendarYear
}