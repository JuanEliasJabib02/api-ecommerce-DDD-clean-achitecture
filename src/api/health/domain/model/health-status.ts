export interface HealthStatus {
  status: 'ok' | 'error';
  message?: string;
  uptime: number;
}


/* 

1.In this step, you define the data model that represents the structure of the data. In the case of the HealthStatus service, you need to define what information you want to store about the health status of the application. This includes things like the status of various services, the database connection status, and any other relevant information that could affect the health of the application.

You can create an interface that defines the structure of the data, including the data types for each field. This will allow you to enforce data consistency and improve the readability of your code.
 */