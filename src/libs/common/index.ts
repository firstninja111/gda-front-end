export const getFormatDate = (timestamp: any) => {
  const weekday = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const date = new Date(timestamp)
  const dateFormat = `${weekday[date.getDay()]} ${(date.getMonth() + 1).toString().padStart(2, '0')}/${date
    .getDate()
    .toString()
    .padStart(2, '0')}/${date.getFullYear() % 100} @ ${
    date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
  }:${date.getMinutes().toString().padStart(2, '0')} ${date.getHours() >= 12 ? 'pm' : 'am'}`

  return dateFormat
}

export const assessmentMenu = [
  {
    name: 'Lessons',
    to: '/lessons',
  },
  {
    name: 'Exercises by Lessons',
    to: '/',
  },
  {
    name: 'Exercise Library',
    to: '/practice',
  },
  {
    name: 'Assessments',
    to: '/assessments',
  },
  {
    name: 'Alerts',
    to: '/',
  },
  {
    name: 'Resources',
    to: '/',
  },
] 
