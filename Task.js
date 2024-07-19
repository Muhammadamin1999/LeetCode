function findMedianExpenditure (expenses) {
  function CalFirstSunday (year, month) {
    const initialDay = new Date(year, month - 1, 1)
    const firstSunday = new Date(initialDay)
    firstSunday.setDate(1 + ((7 - initialDay.getDay()) % 7))
    return firstSunday
  }

  let expenditures = []
  for (const monthYear in expenses) {
    const [yr, mn] = monthYear.split('-').map(Number)
    const firstSunday = CalFirstSunday(yr, mn)

    for (const day in expenses[monthYear]) {
      const currentDate = new Date(yr, mn - 1, day)
      if (currentDate <= firstSunday) {
        const dailyExpenses = expenses[monthYear][day]
        for (const category in dailyExpenses) {
          expenditures.push(...dailyExpenses[category])
        }
      }
    }
  }
  if (expenditures.length === 0) {
    return null
  }
  expenditures.sort((a, b) => a - b)
  const total = expenditures.length
  let median
  if (total % 2 === 0) {
    median =
      (expenditures[Math.floor((total - 1) / 2)] +
        expenditures[Math.floor(total / 2)]) /
      2
  } else {
    median = expenditures[Math.floor(total / 2)]
  }
  return median
}
const expensesData = {
  '2023-01': {
    '01': {
      food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
      fuel: [210.22]
    },
    '09': {
      food: [11.9],
      fuel: [190.22]
    }
  },
  '2023-03': {
    '07': {
      food: [20, 11.9, 30.2, 11.9]
    },
    '04': {
      food: [10.2, 11.5, 2.5],
      fuel: []
    }
  },
  '2023-04': {}
}

console.log(findMedianExpenditure(expensesData))
