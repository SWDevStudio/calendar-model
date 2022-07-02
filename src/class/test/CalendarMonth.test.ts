import CalendarMonth from "../CalendarMonth";
import moment from "moment";
import {TIME_FORMAT} from "../../data/TIME_FORMAT";

describe('Тестирование класса CalendarMonth', function () {
  it('Класс календарь существует.', () => {
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
});