import { HealthStatus } from "../model/health-status";

export interface HealthRepository {
  getHealthStatus(): Promise<HealthStatus>;
}




/**
-A repository is a component responsible for handling data storage and retrieval in an application.
-It provides a way to perform common database operations, such as creating, reading, updating, and deleting data.
-By using a repository, the application can interact with data without having to know the specific details of how the data is stored or retrieved, promoting separation of concerns and easier maintenance.

In summary, a repository acts as an abstraction layer between the application and the data storage, providing a standardized way to interact with data and hiding the implementation details of the underlying data persistence mechanism.
 */
