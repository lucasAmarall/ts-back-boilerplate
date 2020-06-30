import DaysEnum from "../enums/DaysEnum";

export default interface IAd {
  title: string;
  description: string;
  price: number;
  day: DaysEnum;
  owner: string;
}