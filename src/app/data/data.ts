export interface ITestForm {
    name?: string
    age?: number
    martial?: string
    university?: string[]
    placeBorn?: string
    skills?: string[]
    [key: string]: any

}

export interface IInput {
    name: string
    label: string
    required?: boolean
    description?: string
    placeholder?: string
}

export interface INumber {
    name: string
    label: string
    required?: boolean
    description?: string
}

export interface ISelect {
    name: string
    label: string
    required?: boolean
    choices?: string[]
    description?: string
}

export interface ICheckbox {
    name: string
    label: string
    required?: boolean
    choices?: string[]
    description?: string
}

export interface IGenerator {

    input: IInput[]

    number: INumber[]

    select: ISelect[]

    checkbox: ICheckbox[]
}

export const generator: IGenerator = {
    input: 
    [
        {
            name: "Имя",
            label: 'name',
            required: true,
            description: '',
            placeholder: 'Введите ваше имя'
            },
            {
            name: "ВУЗ",
            label: 'university',
            required: false,
            description: 'Укажите заведения, в которых вы учились',
            placeholder: 'Например, ВолгГУ'
            }
    ],

    number: 
    [
        {
            name: 'Возраст',
            label: 'age',
            required: true,
        }
    ],

    select: [
        {
            name: "Семейное положение",
            label: 'martial',
            required: true,
            choices: ["Не важно", 'Женат/Замужем', "Не женат/Не замужем"]
        },
        {
            name: "Место рождения",
            label: 'placeBorn',
            required: false,
            choices: ["Не важно", "Москва", "Волгоград", "Владивосток", "Саратов", "Элиста"]
        }
    ],

    checkbox: [
        {
            name: "Навыки",
            label: 'skills',
            required: false,
            choices: ['Общение', "Иностранные языки", "Бег с препятствиями", "Вождение", "Программирование" , "Выделить все"]
        }
    ]
}
