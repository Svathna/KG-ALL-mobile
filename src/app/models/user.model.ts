export enum UserType {
  WORKER = 1,
  MANAGER = 2,
  OFFICE_MANAGER = 3,
  OWNER = 4
}

export interface User {
  userName: string;
  type: UserType;
  phoneNumber: number;
  registrationTokens: string[];
  deleted: boolean;
  _id: string;
}
