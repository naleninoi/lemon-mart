import { IUser } from './interfaces/user.interface';
import { IName } from './interfaces/name.inteface';
import { IPhone } from './interfaces/phone.interface';
import { AuthRole } from '../../auth/enums/auth-role.enum';

export class User implements IUser {

  constructor(
    public id = '',
    public email = '',
    public name: IName = {
      first: '',
      middle: '',
      last: ''
    },
    public picture = '',
    public role = AuthRole.None,
    public dateOfBirth = new Date(),
    public userStatus = false,
    public level = 0,
    public address = {
      line1: '',
      city: '',
      state: '',
      zip: ''
    },
    public phones: IPhone[] = []
  ) {
  }

  static Build(user: IUser) {
    if (!user) {
      return new User();
    }
    if (typeof user.dateOfBirth === 'string') {
      user.dateOfBirth = new Date(user.dateOfBirth);
    }
    return new User(
      user.id,
      user.email,
      user.name,
      user.picture,
      user.role as AuthRole,
      user.dateOfBirth,
      user.userStatus,
      user.level,
      user.address,
      user.phones
    );
  }

  public get fullName(): string {
    if (!this.name) {
      return '';
    }
    if (this.name.middle) {
      return `${this.name.first} ${this.name.middle} ${this.name.last}`;
    }
    return `${this.name.first} ${this.name.last}`;
  }

  toJSON(): object {
    const serialized = Object.assign(this);
    delete serialized.id;
    delete serialized.fullName;
    return serialized;
  }
}
