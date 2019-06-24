const map = async (arr = [], callback = (any, i = 0) => { }) => {
  let iterator = 0
  const mappedArray = []
  for (const item of arr) {
    mappedArray.push(await callback(item, iterator += 1))
  }
  return mappedArray
}

export default map
