const hashMap = {
  month: 1,
  year: 3
}

export const sortedData = (arr) => arr.sort((prev, next) => (prev.date > next.date ? 1 : -1));

export const serializeData = (arr, type) => {
  return arr.reduce((acc, {date, amount}) => {

    const params = new Date(date).toDateString().split(' ')[hashMap[type]];
    const newObj = {
      [type]: params,
      amount
    }
    acc.push(newObj)
    return acc;
  }, [])
}
