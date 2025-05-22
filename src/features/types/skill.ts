import { SkillLevel } from '@/features/types/skillLevel'

export class Skill {
  id!: number
  name!: string
  skillLevels?: SkillLevel[]
}
