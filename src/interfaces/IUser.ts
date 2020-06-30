import GenderEnum from '../enums/GenderEnum';
import IDateInformation from "./IDateInformation";
import IAd from "./IAd";

export default interface IUser extends IDateInformation {
  email: string;
  name: string;
  password: string;
  gender: GenderEnum;
  ads:  string[];
}
