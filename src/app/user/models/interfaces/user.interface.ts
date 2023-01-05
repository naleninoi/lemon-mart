import { AuthRole } from '../../../auth/enums/auth-role.enum';
import { IName } from './name.inteface';
import { IPhone } from './phone.interface';

export interface IUser {
  id: string;
  email: string;
  name: IName;
  readonly fullName?: string;
  picture: string;
  role: AuthRole | string;
  userStatus: boolean;
  dateOfBirth?: Date | string;
  level: number;
  address: {
    line1: string;
    line2?: string;
    city: string;
    state: string;
    zip: string
  };
  phones: IPhone[];
}
