import { Skill } from '@/features/types/skill'
import { PersonalSkill } from '@/features/types/personalSkill'
import { Instructor } from '@/features/types/instructor'
import type { SportCenter } from '../types/sportCenter'

export const skillsList: Skill[] = [
  {
    id: 0,
    name: 'Сноуборд',
  },
  {
    id: 1,
    name: 'Горные лыжи',
    skillLevels: [
      {
        id: 0,
        name: 'Начальный уровень – первые шаги',
        sublevels: [
          { id: 0, name: 'Привыкание к снаряжению' },
          { id: 1, name: 'Основная стойка и спуск по прямой' },
          { id: 2, name: 'Стойка «плуг» – торможение и остановка' },
          { id: 3, name: 'Поворот в плуге' },
        ],
      },
      {
        id: 1,
        name: 'Начальный уровень – катание на параллельных лыжах',
        sublevels: [
          { id: 0, name: 'Боковое соскальзование – преодоление крутых участков склона' },
          { id: 1, name: 'Стойка «траверс» – пересечение склона поперек' },
          {
            id: 2,
            name: 'Смешанный поворот (карвинг начального уровня) – использование плуга и параллельных лыж',
          },
          { id: 3, name: 'Базовый поворот на параллельных лыжах с проскальзыванием' },
        ],
      },
    ],
  },
]

export const skills: PersonalSkill[] = [
  {
    id: 0,
    name: 'Сноуборд',
    subskillsLearned: 5,
    subskillsAmount: 100,
    skillLevel: 0,
    nextSubskill: '1.6 Отработка поворотов',
  },
  {
    id: 1,
    name: 'Горные лыжи',
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
