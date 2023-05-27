export interface UserEntity {
  id: string;
  name: string;
  email: string;
  password: string;
  role: userRole;
  status: userStatus;
  createdAt: Date;
  updatedAt: Date;
}


export enum userStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE"
}

export enum userRole {
  USER = "USER",
  ADMIN = "ADMIN",
}