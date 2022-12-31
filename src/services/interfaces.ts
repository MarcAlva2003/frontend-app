export interface ICompany {
  id?: number;
  name: string;
  company_business: string;
  foundation_country: string;
  foundation_date: string;
}

export interface IRegister{
  // firstName: string;
  // secondName: string;
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
}

export interface IUserEdit {
  operation: 'username' | 'first_name' | 'last_name';
  username: string;
  first_name: string;
  last_name: string;
}