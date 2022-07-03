# Calendar model 

Тут написан небольшой набор классов при помощи которых можно генерировать сетку для календаря.

Данная библиотека работает с объектами [moment](https://github.com/moment/moment)

Существующие классы
+ [CalendarDay](./src/class/CalendarDay.ts)
+ [CalendarWeek](./src/class/CalendarWeek.ts)
+ [CalendarMonth](./src/class/CalendarMonth.ts)
+ [CalendarYear](./src/class/CalendarYear.ts) 

Все они реализуют интерфейс [ICalendar](./src/interface/ICalendar.ts)

Опции которые принимают в себя календари [OptionCalendar](./src/interface/OptionCalendar.ts)
```javascript
// Дефолтные значения
const optionCalendar = {
  date: moment(),
  // В зависимости от календаря
  
  // На данный момент генерация где воскресенье 1й день не сделана.
  
  // Нужно для сдвига даты на день, неделю, месяц, год
  typeStart: 'day' || 'isoWeek' || 'month' || 'year',
  
  // Указывает на тип календаря на день, неделю, месяц, год
  typeCalendar: 'day' || 'week' || 'month' || 'year' 
}
```

Пример использования

```javascript
const calendar = new CalendarMonth({
  date: moment('03.07.2022','DD.MM.YYYY')
})

// Вернет вам массив из moment объектов, для рендера календаря.
const grid = calendar.gridCalendar()
```

Так же есть несколько дополнительных методов которые вы можете использовать уже сейчас. 

```javascript
const calendar = new CalendarMonth({
  date: moment('03.07.2022','DD.MM.YYYY')
})
// Сдвинет дату календаря на 1 мес, сдвиг равняется типу календаря т.е
// если это будет CalendarWeek, то дата сдвинется на неделю. 
calendar.swapNextDate()
// Получим массив за Август
calendar.gridCalendar()
// Сдвинет дату календаря на 1 мес назад.
calendar.swapPrevDate()
```

Так же есть дополнительный метод
```javascript
const calendar = new CalendarMonth({
  date: moment('03.07.2022','DD.MM.YYYY')
})
// Переместите календарь в нужное вам время
calendar.setDate(moment())
```

Это тестовый вариант модели для календаря, в будущем планируется сделать 
Если у вас есть желание поддержать разработку или у вас есть идея по улучшению, то прошу писать сюда 
[swdevstudio@gmail.com](mailto:swdevstudio@gmail.com)
- [ ] Улучшения по календарю 
  - [ ] Сделать возможность генерации массива с воскресенья.
  - [ ] Сделать общий класс с возможность переключения между типами календаря.
  - [ ] Добавить обертку модели для Vue.
- [ ] По проекту
  - [ ] Провести код ревью проекта.
  - [ ] Добавить prettier и eslint для единого форматирования кода.