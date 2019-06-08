export const forEach = async (arr = [], callback = (any, i = 0) => {}) => {
  let iterator = 0
  for (const item of arr) {
    await callback(item, iterator += 1)
  }
}
