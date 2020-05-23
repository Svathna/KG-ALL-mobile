import { CompanyDetail } from './company.model';

export enum UserType {
    WORKER = 1,
    MANAGER = 2,
    OFFICE_MANAGER = 3,
    OWNER = 4,
}

export interface User {
    userName: string;
    type: UserType;
    phoneNumber: number;
    registrationTokens: string[];
    deleted: boolean;
    company: CompanyDetail;
    _id: string;
}
