import Calendar from "../Calendar";
import moment from "moment";
import {TIME_FORMAT} from "../../data/TIME_FORMAT";

describe('Тестирование класса Calendar', function () {

  // Запустится перед каждым тестом
  beforeEach(() => {

  })

  // Запустится 1 раз перед тесто
  afterAll(() => {

  })

  it('Класс календарь существует', () => {
    const calendar = new Calendar({ date: moment(), typeCalendar: 'year' })

    expect(
      calendar instanceof Calendar
    ).toBeTruthy()
  })

  it('Корректная инициализация параметров календаря с минимальными данными', () => {
    const calendar = new Calendar({ typeCalendar: 'year' })

    expect(calendar.typeCalendar)
      .toBe('year')

    expect(calendar.typeStart)
      .toBe('year')

    expect(calendar.selectDate.format('YYYY-MM-DD'))
      .toBe(moment().format('YYYY-MM-DD'))
  })

  it('swapNextDate работает корректно.', function () {
    const calendar = new Calendar({ typeCalendar: 'month' })
    calendar.swapNextDate()

    expect(calendar.selectDate.format(TIME_FORMAT)).toBe(moment().add(1, 'month').format(TIME_FORMAT))
  });

  it('swapPrevDate работает корректно.', function () {
    const calendar = new Calendar({ typeCalendar: 'month' })
    calendar.swapPrevDate()

    expect(calendar.selectDate.format(TIME_FORMAT)).toBe(moment().add(-1, 'month').format(TIME_FORMAT))
  });
});