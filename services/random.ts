interface Options {
  min: number
  max: number
}

export function getRandomNumber(options: Options) {
  return Math.floor(Math.random() * (options.max - options.min) + options.min)
}
