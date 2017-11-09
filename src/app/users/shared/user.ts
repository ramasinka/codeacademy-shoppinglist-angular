import {Role} from '../../roles/shared/role';

export class User {
  role: Role;
	id: any;
	name: String;
	email: String;
  password: String;
  public roles: Role[];
}
