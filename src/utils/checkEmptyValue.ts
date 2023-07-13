export const checkEmptyValue = (value: string | number | null | undefined) =>
  ['', null, NaN, undefined].includes(value);
