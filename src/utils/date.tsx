import moment from 'moment'

export const formattedDate = date =>
  moment?.unix(date)?.format?.('MM/DD/YYYY') ?? date
export const formattedDateFromTimeStamp = date =>
  moment(date * 1000)?.format?.('MM/DD/YYYY') ?? date

export const monthYearDate = date => moment(date)?.format?.('MMMM YYYY') ?? date

export const isDatePassed = date => moment(date).isSameOrBefore()
