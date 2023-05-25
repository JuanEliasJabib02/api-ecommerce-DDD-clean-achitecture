export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: userRole;
  status: userStatus;
  createdAt: Date;
  updatedAt: Date;
}


enum userStatus {
  ACTIVE,
  INACTIVE
}

enum userRole {
  USER,
  ADMIN
}