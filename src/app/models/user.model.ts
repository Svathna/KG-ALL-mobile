export enum UserType {
  WORKER = 1,
  MANAGER = 2,
  OFFICE_MANAGER = 3,
  OWNER = 4
}

export class User {
  firstName: string;
  lastName: string;
  type: UserType | null;
  email: string;
  registrationTokens: string[];
  deleted: boolean;
  photo: string;
  birthday: Date;
  team: string;
  isCurrentlyWorking: boolean;
  _id: string;

  constructor(user) {
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.type = user.type ? user.type : null;
    this.email = user.email;
    this.registrationTokens = user.registrationTokens;
    this.deleted = user.deleted;
    this.photo = user.photo;
    this.birthday = user.birthday;
    this.team = user.team;
    this.isCurrentlyWorking = user.isCurrentlyWorking;
  }
}
