import { SkillLevel } from '@/features/types/skillLevel'

export class Skill {
  id!: number
  name!: string
  active!: number
  skillLevels?: SkillLevel[]
}
