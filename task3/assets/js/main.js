const app = new Vue({
    el: '#app',
    data: {
        tasks: [
            {
                id: 1,
                category: "Vue",
                name: "Выполнить задание 1.1.1",
                description: "Выполнив данное задание вы научитесь лучше работать с условиями для отображения контента.",
                subtasks: [
                    { name: "Объеденить все страницы в одну" },
                    { name: "Переключение по страницам" },
                    { name: "Текущий пункт навигации выделяется" },
                ],
                isCompleted: false
            },
            {
                id: 2,
                category: "Vue",
                name: "Выполнить задание 1.1.2",
                description: "Выполнив данное задание вы научитесь лучше работать со списками, массивами, вычислительными свойствами и датой.",
                subtasks: [
                    { name: "Добавление при клике по кнопке" },
                    { name: "Очистка предыдущего значения" },
                    { name: "Время выводится" },
                    { name: "Список сортируется" },
                ],
                isCompleted: false
            },
            {
                id: 3,
                category: "Vue",
                name: "Выполнить задание 1.1.3",
                description: "Выполнив данное задание вы научитесь лучше работать со списками, массивами, css-классами и вычислительными свойствами.",
                subtasks: [
                    { name: "Вывести список задач" },
                    { name: "Стиль карточки изменяется при переключении чекбокса" },
                    { name: "Сортировка по актуальности" },
                ],
                isCompleted: false
            }
            ],
            cardBg: 'text-dark bg-light',
            cardBgCompleted: 'text-light bg-success',
            categoryUncomplete: 'bg-primary',
            categoryComplete: 'text-dark bg-white',
        },
})