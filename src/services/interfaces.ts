export interface ICompany {
  id?: number;
  name: string;
  company_business: string;
  foundation_country: string;
  foundation_date: string;
}

export interface IRegister{
  firstName: string;
  secondName: string;
  email: string;
  username: string;
  password: string;
  repeatPassword: string;
}