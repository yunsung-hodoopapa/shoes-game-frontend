import { shoeListLength, shoesObject } from '../constants';

export const fillingShoeObject = (param) => {
  const infoContainer = [...param];
  for (let i = 0; i < shoeListLength - param.length; i++) {
    infoContainer.push(shoesObject);
  }
  return infoContainer;
};
