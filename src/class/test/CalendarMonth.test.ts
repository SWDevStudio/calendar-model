import CalendarMonth from "../CalendarMonth";
import moment from "moment";
import {TIME_FORMAT} from "../../data/TIME_FORMAT";

describe('Тестирование класса CalendarMonth', function () {
  it('Класс существует.', () => {
    const calendar = new CalendarMonth()

    expect(
      calendar instanceof CalendarMonth
    ).toBeTruthy()
  })

  it('Сетка возвращает корректное кол-во дней в месяце.', () => {
    // TODO думаю стоит прогнать циклом несколько месяцев
    const calendar = new CalendarMonth({ date: moment('02.04.2022', TIME_FORMAT) })
    expect(
      calendar.gridCalendar().length
    ).toBe(35)
  })

  it('Сетка возвращает корректные данные начало с понедельника.', () => {
    const calendar = new CalendarMonth({ date: moment('02.07.2022', TIME_FORMAT) })
    let grid = calendar.gridCalendar()

    expect(
      grid[0].format(TIME_FORMAT),
    ).toBe('27.06.2022')

    expect(
      grid[grid.length - 1].format(TIME_FORMAT),
    ).toBe('31.07.2022')

    calendar.swapPrevDate()
    grid = calendar.gridCalendar()

    expect(
      grid[0].format(TIME_FORMAT),
    ).toBe('30.05.2022')

    expect(
      grid[grid.length - 1].format(TIME_FORMAT),
    ).toBe('03.07.2022')

  })

  it('Сетка возвращает корректные данные начало с воскресенья.', () => {
    const calendar = new CalendarMonth({ date: moment('02.07.2022', TIME_FORMAT), startDay: 'sunday' })

    let grid = calendar.gridCalendar()

    expect(
      grid[0].format(TIME_FORMAT),
    ).toBe('26.06.2022')

    expect(
      grid[grid.length - 1].format(TIME_FORMAT),
    ).toBe('06.08.2022')

    calendar.swapPrevDate()
    grid = calendar.gridCalendar()

    expect(
      grid[0].format(TIME_FORMAT),
    ).toBe('29.05.2022')

    expect(
      grid[grid.length - 1].format(TIME_FORMAT),
    ).toBe('02.07.2022')

  })
});