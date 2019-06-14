const asyncMap = async (arr, callback) => Promise.all(arr.map(callback))

export default asyncMap
