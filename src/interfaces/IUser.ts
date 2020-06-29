import GenderEnum from '../enums/GenderEnum';
export interface IUser {
  email: string;
  name: string;
  password?: string;
  gender: GenderEnum;
}
