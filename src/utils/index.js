import { shoesInfoHandler } from '../reducers/itemsInfoReducer';
import { shoeListLength, shoesObject } from '../constants';

export const fillingShoeObject = (param) => {
  if (param.length > 0) {
    const infoContainer = [...param];
    for (let i = 0; i < shoeListLength - param.length; i++) {
      infoContainer.push(shoesObject);
    }
    return infoContainer;
  } else {
    const infoContainer = JSON.parse(localStorage.getItem('shoesInfo'));
    for (let i = 0; i < shoeListLength - param.length; i++) {
      infoContainer.push(shoesObject);
    }
    return infoContainer;
  }
};
