
export const singleArgumentPipe = (...fns) => argument => (fns.reduce(async (accumulator, current) => current(await accumulator), argument))

export const multiArgumentPipe = (firstFn, ...restFns) => restFns.reduce((accumulator, current) => async (...args) => current(await accumulator(...args)), firstFn)
