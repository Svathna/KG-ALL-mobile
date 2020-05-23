export interface Company {
    company: CompanyDetail;
    moc: Moc;
    vat: Vat;
    tax: Tax;
}

export interface CompanyDetail {
    name: string;
    nameInKhmer: string;
    description: string;
    deleted: boolean;
    _id: string;
}

export interface Moc {
    mocNumber: number;
    notedDate: Date;
    capital: number;
    dateOfBTV: Date;
    type: CompanyType;
    mocUsernamePasswordLogin: UsernamePasworrd;
    _id: string;
    deleted: boolean;
}

export enum CompanyType {
    SOLE_PROPRIETORSHIPS = 1,
    PRIVATE_LIMITED_COMPANY = 2,
    PUBLIC_LIMITED_COMPANY = 3,
}

export interface UsernamePasworrd {
    userName: string;
    password: string;
}

export interface Vat {
    vatNumber: number;
    notedDate: Date;
    vatBranch: string;
    address: string;
    bankName: string;
    bankAccountName: string;
    bankAccountNumber: number;
    taxCardNumber: string;
    phoneNumber: string;
    deleted: boolean;
    _id: string;
}

export interface Tax {
    revenue: number;
    spending: number;
    paidAmout: number;
    others: string;
    month: string;
    year: number;
    deleted: boolean;
    _id: string;
}
