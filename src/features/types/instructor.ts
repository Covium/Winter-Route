import { Person } from '@/features/types/person.ts'

export class Instructor extends Person {
  skills!: number[]
  phone!: string
  email!: string
  officiality!: number
}
