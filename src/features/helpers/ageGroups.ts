export function getAge(birthDate: number): number {
  const birth = new Date(birthDate)
  const today = new Date()
  let age = today.getFullYear() - birth.getFullYear()
  const monthDiff = today.getMonth() - birth.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--
  }
  return age
}

export function getAgeText(birthDate: number): string {
  const age = getAge(birthDate)

  let ageText = 'лет'
  if (age % 10 === 1 && age % 100 !== 11) ageText = 'год'
  else if (age % 10 >= 2 && age % 10 <= 4 && (age % 100 < 10 || age % 100 >= 20)) ageText = 'года'

  return `${age} ${ageText}`
}

export function getAgeGroup(birthDate: number): string {
  const age = getAge(birthDate)
  let ageGroup = ''

  if (age < 3) ageGroup = 'Младше 3 лет'
  else if (age <= 4) ageGroup = '3–4 года'
  else if (age <= 7) ageGroup = '5–7 лет'
  else if (age <= 10) ageGroup = '8–10 лет'
  else if (age <= 14) ageGroup = '11–14 лет'
  else if (age <= 18) ageGroup = '15–18 лет'
  else if (age <= 25) ageGroup = '19–25 лет'
  else if (age <= 35) ageGroup = '26–35 лет'
  else if (age <= 50) ageGroup = '36–50 лет'
  else ageGroup = 'Старше 50 лет'

  return ageGroup
}

export function getLocaleBirthDate(birthDate: number): string {
  return new Date(birthDate).toLocaleDateString('ru-RU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
