import { Skill } from '@/features/types/skill'
import { PersonalSkill } from '@/features/types/personalSkill'
import { Instructor } from '@/features/types/instructor'
import type { SportCenter } from '../types/sportCenter'

export const skillsList: Skill[] = [
  {
    id: 0,
    name: 'Сноуборд',
    active: 2,
    skillLevels: [
      {
        id: 0,
        name: '1 этап: Начальный уровень',
        active: 2,
        sublevels: [
          { id: 0, name: '1.1. Привыкание к доске', active: 2 },
          { id: 1, name: '1.2. Скользящий шаг', active: 2 },
          { id: 2, name: '1.3. Основная стойка', active: 2 },
        ],
      },
      {
        id: 1,
        name: '2 этап: Базовые техники',
        active: 2,
        sublevels: [
          { id: 0, name: '2.1. Скользящий поворот', active: 2 },
          { id: 1, name: '2.2. Карвинг', active: 2 },
        ],
      },
    ],
  },
  {
    id: 1,
    name: 'Горные лыжи',
    active: 1,
    skillLevels: [
      {
        id: 0,
        name: '1 этап: Начальный уровень – первые шаги',
        active: 2,
        sublevels: [
          { id: 0, name: '1.1. Привыкание к снаряжению', active: 2 },
          { id: 1, name: '1.2. Основная стойка и спуск по прямой', active: 2 },
          { id: 2, name: '1.3. Стойка «плуг» – торможение и остановка', active: 2 },
          { id: 3, name: '1.4. Поворот в плуге', active: 2 },
        ],
      },
      {
        id: 1,
        name: '2 этап: Начальный уровень – катание на параллельных лыжах',
        active: 1,
        sublevels: [
          { id: 0, name: '2.1. Боковое соскальзование', active: 2 },
          { id: 1, name: '2.2. Стойка «траверс»', active: 1 },
          { id: 2, name: '2.3. Смешанный поворот', active: 0 },
          { id: 3, name: '2.4. Базовый поворот на параллельных лыжах', active: 0 },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Биатлон',
    active: 0,
    skillLevels: [
      {
        id: 0,
        name: '1 этап: Основы биатлона',
        active: 2,
        sublevels: [
          { id: 0, name: '1.1. Бег на лыжах', active: 0 },
          { id: 1, name: '1.2. Стрельба лёжа', active: 0 },
        ],
      },
      {
        id: 1,
        name: '2 этап: Продвинутый уровень',
        active: 0,
        sublevels: [
          { id: 0, name: '2.1. Стрельба стоя', active: 0 },
          { id: 1, name: '2.2. Смешанная эстафета', active: 0 },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'Фигурное катание',
    active: 0,
    skillLevels: [
      {
        id: 0,
        name: '1 этап: Базовые элементы',
        active: 0,
        sublevels: [
          { id: 0, name: '1.1. Скользящий шаг', active: 0 },
          { id: 1, name: '1.2. Остановка', active: 0 },
        ],
      },
      {
        id: 1,
        name: '2 этап: Прыжки и вращения',
        active: 0,
        sublevels: [
          { id: 0, name: '2.1. Одиночный прыжок', active: 0 },
          { id: 1, name: '2.2. Вращение', active: 0 },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'Хоккей',
    active: 0,
    skillLevels: [
      {
        id: 0,
        name: '1 этап: Основы хоккея',
        active: 0,
        sublevels: [
          { id: 0, name: '1.1. Катание назад', active: 0 },
          { id: 1, name: '1.2. Передача шайбы', active: 0 },
        ],
      },
      {
        id: 1,
        name: '2 этап: Командная игра',
        active: 0,
        sublevels: [
          { id: 0, name: '2.1. Тактика нападения', active: 0 },
          { id: 1, name: '2.2. Тактика защиты', active: 0 },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'Кёрлинг',
    active: 0,
    skillLevels: [
      {
        id: 0,
        name: '1 этап: Основы кёрлинга',
        active: 0,
        sublevels: [
          { id: 0, name: '1.1. Бросок камня', active: 0 },
          { id: 1, name: '1.2. Свиппинг', active: 0 },
        ],
      },
      {
        id: 1,
        name: '2 этап: Командная стратегия',
        active: 0,
        sublevels: [
          { id: 0, name: '2.1. Построение дома', active: 0 },
          { id: 1, name: '2.2. Защита и атака', active: 0 },
        ],
      },
    ],
  },
]

export const skills: PersonalSkill[] = [
  {
    id: 0,
    name: 'Сноуборд',
    active: 0,
    subskillsLearned: 5,
    subskillsAmount: 100,
    skillLevel: 0,
    nextSubskill: '1.6 Отработка поворотов',
  },
  {
    id: 1,
    name: 'Горные лыжи',
    active: 1,
    subskillsLearned: 29,
    subskillsAmount: 87,
    skillLevel: 1,
    nextSubskill: '3.10 Прыжки с трамплина',
  },
]

export const instructors: Instructor[] = [
  {
    id: 35021337,
    surname: 'Иванов',
    name: 'Иван',
    patronymic: 'Иванович',
    sex: 0,
    birthDate: 755211600000,
    skills: [0, 1],
    phone: '+7 (912) 345-67-89',
    email: 'ivanov.ivan@mail.ru',
    officiality: 0,
  },
]

export const sportCenters: SportCenter[] = [
  {
    id: 0,
    name: 'Цыпина гора',
    address:
      'Вологодская область, Кирилловский район, сельское поселение Ферапонтовское, деревня Оденьево, улица Волшебная, 2',
    phone: '+7 (800) 222-08-48',
    email: 'cipinagora@yandex.ru',
    skills: [0, 1],
  },
]
