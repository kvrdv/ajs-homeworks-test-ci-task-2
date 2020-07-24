[![Build status](https://ci.appveyor.com/api/projects/status/j4gwda8enj2smc10?svg=true)](https://ci.appveyor.com/project/kvrdv/ajs-homeworks-test-ci-task-1)



## Нетология
### 7. Продвинутый JavaScript: современные возможности языка
### 7.3. «Unit-тестирование»
[Домашнее задание 2](https://github.com/netology-code/ajs-homeworks/tree/ajs8/test-ci)

## Matchers

### Легенда

Поскольку в рамках игры вы можете управлять несколькими героями, то во время "битвы" неплохо бы отображать уровень жизни, оставшейся у каждого героя в отсортированном порядке (наверху - самые здоровые). Необходимо сделать это и написать соответствующие авто-тесты.

### Описание

Дан массив с информацией о героях, например:
```javascript
[
  {name: 'мечник', health: 10},
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
]
```
В отсортированном порядке должно выглядеть следующим образом:
```javascript
[
  {name: 'маг', health: 100},
  {name: 'лучник', health: 80},
  {name: 'мечник', health: 10},
]
```

Убедитесь, что `toBe` работать не будет, но будет работать `toEqual`. Изучите документацию на [`toBe`](https://jestjs.io/docs/en/expect#tobevalue) и [`toEqual`](https://jestjs.io/docs/en/expect#toequalvalue) и выясните в чём разница (а так же термин Deep Equality). Убедитесь, что вы обеспечили 100% покрытие тестами по строкам.

Вы можете дополнительно изучить список доступных "матчер" (список приведён на странице [Документация по expect](https://jestjs.io/docs/ru/expect)), для организации сравнения.