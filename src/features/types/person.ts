export class Person {
  id!: number
  surname!: string
  name!: string
  patronymic?: string
  sex!: number
  birthDate!: number

  private static readonly sexMap: { [key: number]: string } = {
    0: 'М',
    1: 'Ж',
  }
  static getSexName(sex: number): string {
    return this.sexMap[sex] || 'Н'
  }
}
