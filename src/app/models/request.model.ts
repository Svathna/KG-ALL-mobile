import { CompanyDetail } from './company.model';

export interface Request {
    _id: string
    description: string;
    status: RequestStatus;
    type: RequestType;
    company: CompanyDetail;
    createdAt: string;
    updatedAt: string;
}

export interface RequestsResponse {
    requests: Request[];
    success: boolean;
    message: string;
}

export enum RequestStatus {
    PENDING = 'pending',
    ACCEPTED = 'accepted',
    REJECTED = 'rejected',
}

export enum RequestStatusInKhmer {
    pending = 'កំពុងរង់ចាំ',
    accepted = 'បានទទួលយក',
    rejected = 'បានបដិសេធ',
}
  
export enum RequestType {
    REQUEST_DOCUMENT = 1,
    OTHERS = 2,
}
  