export const returnEmptyIfUndefined = (
  value: string | undefined | null
): string => {
  return value === (undefined || null) ? "" : value;
};
