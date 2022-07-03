import CalendarWeek from "../CalendarWeek";
import moment from "moment";

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
});