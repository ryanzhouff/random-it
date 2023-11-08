/**
 * 生成随机整数，包含最大值
 *
 * @description 如果不传参数默认生成[0,10]之间的整数
 * @param { number } min 最小值
 * @param { number} max 最大值
 * @returns 生成的随机整数
 * @example randomInt(1, 5);
 */
export const randomInt = (min: number = 0, max: number = 10) => {
  return Math.floor(Math.random() * (max - min) + min);
};

/**
 * 生成随机布尔值
 *
 * @returns 生成随机布尔值，true或false
 */
export const randomBoolean = () => {
  return [true, false][randomInt(0, 1)];
};
