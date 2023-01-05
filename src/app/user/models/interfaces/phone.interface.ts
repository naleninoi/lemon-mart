import { PhoneType } from '../../enums/phone-type.enum';

export interface IPhone {
  type: PhoneType;
  digits: string;
  id: number;
}
