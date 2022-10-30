import logout from './actions/logout.svg';

interface IActions{
  logout: string;
}

interface IIconList{
  actions: IActions;
}

export const IconList: IIconList = {
  actions:{
    logout: logout
  }
}