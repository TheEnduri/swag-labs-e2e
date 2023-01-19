/**
 *
 * @param min include that number
 * @param max not include that number
 * @param exclude value that we want exclude
 * @returns random integer number from min to max-1
 * @example getRandomInt(0,2) can return 0 or 1
 */
export const getRandomInt = (
  min: number,
  max: number,
  exclude?: number
): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const number = Math.floor(Math.random() * (max - min)) + min
  return number === exclude ? getRandomInt(min, max, exclude) : number
}
