import add from './actions/add.svg';
import building from './custom/building.svg';
import chevronDownThin from './arrows/chevron-down-thin.svg';
import edit from './actions/edit.svg';
import hidePassword from './actions/hide-password.svg';
import logout from './actions/logout.svg';
import showPassword from './actions/show-password.svg';

interface IActions{
  logout: string;
  edit: string;
  add: string;
  showPassword: string;
  hidePassword: string;
}

interface ICustom{
  building: string;
}

interface IArrows{
  chevronDownThin: string;
}

interface IIconList{
  actions: IActions;
  custom: ICustom;
  arrows: IArrows;
}

export const IconList: IIconList = {
  actions:{
    logout: logout,
    edit: edit,
    add: add,
    showPassword: showPassword,
    hidePassword: hidePassword,
  },
  custom:{
    building: building
  },
  arrows:{
    chevronDownThin: chevronDownThin,
  }
}