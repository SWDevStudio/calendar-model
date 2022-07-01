import moment, {unitOfTime} from "moment";

export interface ICalendar {
  /**
   * @description Нужно для расчетов, когда начинается неделя (актуально для недели и месяца)
   */
  readonly typeStart: unitOfTime.StartOf

  /**
   * @description Тип календаря, день, неделя, месяц, год
   */
  readonly typeCalendar: moment.DurationInputArg2

  /**
   * @description на основании определенной даты происходит расчет модели календаря, укажите сегодняшний день и в модели вы получите
   * определенную неделю или месяц, в котором находится определенная дата.
   */
  selectDate: moment.Moment

  /**
   * @description Создает массив момент объектов для дальнейшего рендера
   * @param start {number} - с какого часа делать сетку по часам(актуально для недели и дня)
   * @param end {number} - до какого часа делать сетку по часам
   * @param step {number} - шаг часа, 0.5 - 30 минут, 1 - 1 час, 2 - два часа.
   */
  gridCalendar(start?: number, end?: number, step?:number): moment.Moment[]
}