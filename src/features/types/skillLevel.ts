import { skillSublevel } from '@/features/types/skillSublevel'

export class SkillLevel {
  id!: number
  name!: string
  sublevels?: skillSublevel[]
}
