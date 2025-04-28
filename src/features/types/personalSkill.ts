import { Skill } from '@/features/types/skill'

export class PersonalSkill extends Skill {
  subskillsLearned!: number
  subskillsAmount!: number
  skillLevel!: number
  nextSubskill!: string

  private static readonly skillLevelMap: { [key: number]: string } = {
    0: 'Начинающий',
    1: 'Уверенный',
    2: 'Профессионал',
  }
  static getSkillLevelName(skillLevel: number): string {
    return this.skillLevelMap[skillLevel] || 'Неизвестный'
  }
}
