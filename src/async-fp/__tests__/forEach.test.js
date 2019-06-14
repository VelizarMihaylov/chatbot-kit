import forEach from '../forEach'

describe('async forEach', () => {
  it('should call callback function as many times as length of the array it was called with', async () => {
    const array = [1, 2, 3]
    const callBack = jest.fn()
    await forEach(array, callBack)
    expect(callBack).toHaveBeenCalledTimes(array.length)
  })

  it('should call callback function with each element of the array and matching iterator number', async () => {
    const array = [1, 2, 3]
    const callBack = jest.fn()
    await forEach(array, callBack)
    expect(callBack).toHaveBeenCalledWith(1, 1)
    expect(callBack).toHaveBeenCalledWith(2, 2)
    expect(callBack).toHaveBeenCalledWith(3, 3)
  })
})
