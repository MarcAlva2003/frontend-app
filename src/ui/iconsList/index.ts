import edit from './actions/edit.svg';
import logout from './actions/logout.svg';

interface IActions{
  logout: string;
  edit: string;
}

interface IIconList{
  actions: IActions;
}

export const IconList: IIconList = {
  actions:{
    logout: logout,
    edit: edit
  }
}