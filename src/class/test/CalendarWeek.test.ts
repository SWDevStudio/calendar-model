import CalendarWeek from "../CalendarWeek";
import moment from "moment";
import {TIME_FORMAT} from "../../data/TIME_FORMAT";

describe('Тестирование класса CalendarWeek', function () {
  it('Класс существует.', ()   => {
    const calendar = new CalendarWeek()

    expect(
      calendar instanceof CalendarWeek
    ).toBeTruthy()
  })

  it('Сетка генерируется корректно, начало недели с Понедельника', function () {
    const calendar = new CalendarWeek()
    const grid = calendar.gridCalendar()
    expect(
      grid[0].day()
    ).toBe(1)
  });

  it('Дни недели генерируются корректно с понедельника.', function () {
    const calendar = new CalendarWeek({ date: moment('03.07.2022', TIME_FORMAT) })

    expect(calendar.gridCalendar()[0].format(TIME_FORMAT)).toBe('27.06.2022')
    calendar.setDate(moment('01.08.2022', TIME_FORMAT))

    expect(calendar.gridCalendar()[0].format(TIME_FORMAT)).toBe('01.08.2022')
  });

  it('Сетка генерируется корректно, начало недели с Воскресенья', function () {
    const calendar = new CalendarWeek({
      startDay: 'sunday'
    })
    const grid = calendar.gridCalendar()
    expect(
      grid[0].day()
    ).toBe(0)

    expect(
      grid[grid.length - 1].day()
    ).toBe(6)
  });

  it('Дни недели генерируются корректно с воскресенья.', function () {
    const calendar = new CalendarWeek({
      date: moment('03.07.2022', TIME_FORMAT),
      startDay: 'sunday'
    })

    expect(calendar.gridCalendar()[0].format(TIME_FORMAT)).toBe('03.07.2022')
    calendar.setDate(moment('01.08.2022', TIME_FORMAT))
    expect(calendar.gridCalendar()[0].format(TIME_FORMAT)).toBe('31.07.2022')
  });
});