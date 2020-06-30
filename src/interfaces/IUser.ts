import GenderEnum from '../enums/GenderEnum';
import IDateInformation from "./IDateInformation";

export interface IUser extends IDateInformation {
  email: string;
  name: string;
  password: string;
  gender: GenderEnum;
}
