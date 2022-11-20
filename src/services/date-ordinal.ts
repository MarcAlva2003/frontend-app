export const getOrdinal = (number: number): string => {
  if(number !== 11 && number !== 12){
    const lastChar = number.toString()[number.toString().length - 1];
    return lastChar === '1' ? `${number}st`
      : lastChar === '2' ? `${number}nd`
      : lastChar === '3' ? `${number}rd`
      : `${number}th`;
  }
  return `${number}th`;
};