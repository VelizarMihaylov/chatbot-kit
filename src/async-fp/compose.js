const compose = (...fns) => x => (
  fns.reduceRight(async (y, f) => f(await y), x)
)

export default compose
