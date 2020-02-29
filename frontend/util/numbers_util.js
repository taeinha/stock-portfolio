export const twoDecimals = float => {
  return parseFloat((Math.round(float * 100) / 100)).toFixed(2);
};