export interface HealthStatus {
  status: 'ok' | 'error';
  message?: string;
  uptime: number;
}



/* What is a entity? */

/*  A entity is just a interface that make reference to the file that we going to
save in the database */