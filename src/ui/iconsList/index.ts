import add from './actions/add.svg';
import building from './custom/building.svg';
import edit from './actions/edit.svg';
import logout from './actions/logout.svg';

interface IActions{
  logout: string;
  edit: string;
  add: string;
}

interface ICustom{
  building: string;
}

interface IIconList{
  actions: IActions;
  custom: ICustom;
}

export const IconList: IIconList = {
  actions:{
    logout: logout,
    edit: edit,
    add: add,
  },
  custom:{
    building: building
  }
}