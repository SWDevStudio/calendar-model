import CalendarDay from "../CalendarDay";

describe('Тестирование класса CalendarDay', function () {

  it('Класс существует.', ()   => {
    const calendar = new CalendarDay()

    expect(
      calendar instanceof CalendarDay
    ).toBeTruthy()
  })

  it('Корректный рендер сетки', function () {
    const calendar = new CalendarDay()
    expect(calendar.gridCalendar(0, 1, 1).length).toBe(1)
  });
});