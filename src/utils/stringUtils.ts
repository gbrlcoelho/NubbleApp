const capitalizeFirstLetter = (str: string): string => {
  return str
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const stringUtils = {
  capitalizeFirstLetter,
};
