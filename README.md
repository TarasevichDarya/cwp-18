# CWP/TASK/18 - Классы
function task00() 

{

Создаем на Github репозиторий cwp-18, клонируем его, открываем в IDE

Установим библиотеку moment

}

function task01() {

Создадим файл logger.js

Опишем класс Logger
1. Конструктор с параметрами: prefix, defaultLevel, dateFormat. Значения параметров сохраняются в объект класса. Предусмотрим случай, когда пользователь может не передать какой-то из параметров

2. Метод format(message, level) - который формирует строку для лога на основании сообщения, уровня логирования, префикса и формата даты. Для форматирования даты используем библиотеку moment.

Шаблон строки: Отформатированная дата | Префикс | Уровень логирования | Сообщение

}

function task02(){

Создадим файл console-logger.js

Опишем класс ConsoleLogger наследующий Logger
1. Конструктор с такими же параметрами как и у родителя с вызовом родительского конструктора
2. Переопределим метод format(message, level)
Шаблон строки: Отформатированная дата | Префикс | Сообщение
3. Метод log(message, level)
- выводит на консоль отформатированное сообщение (методом format)
- в зависимости от значения level используется различные методы из console

-- 'LOG' - console.log

-- 'INFO' - console.info

-- 'WARN' - console.warn

-- 'ERROR' - console.error

- в случае отстутствия или недопустимого значения level используем defaultLevel

}

function task03() {

Создадим файл file-logger.js

Опишем класс FileLogger наследующий Logger

1. Конструктор с параметрами file, prefix, defaultLevel, dateFormat с вызовом родительского конструктора. В качестве file пользователь может передать как строку, так и поток. В случае если передана строка - открываем поток на запись.
2. Метод log(message, level)
- выводит в файл отформатированное сообщение (методом format)
- вовзращает промис, который выполнится после завершения записи
- в случае отстутствия level используем defaultLevel
3. Метод close() закрывающий поток записи

}

function task04() {

Создадим файл deferred-file-logger.js

Опишем класс DeferredFileLogger наследующий FileLogger
1. Конструктор с параметрами file, queueLength, prefix, defaultLevel, dateFormat с вызовом родительского конструктора.
2. Переопределим метод log(message, level)
- добавляет отформатированное сообщение (методом format) в очередь
- если размер очереди достигает queueLength - записываем все сообщения в файл и очищаем очередь
- вовзращает промис, который выполнится после завершения записи или добавления в очередь
- в случае отстутствия level используем defaultLevel

}

function task05() {

Синхронизируем локальный репозиторий с удаленным (сделаем push на Github)

}