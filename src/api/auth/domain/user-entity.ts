export interface UserEntity {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: userRole;
  status: userStatus;
}


export enum userStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

export enum userRole {
  USER = "USER",
  ADMIN = "ADMIN",
}