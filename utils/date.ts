import { add } from 'date-fns'

const oneMonthDelay = () => add(new Date(), { months: 1 })

export { oneMonthDelay }
