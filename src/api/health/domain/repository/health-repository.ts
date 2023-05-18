import { HealthStatus } from "../entity/health-status";

export interface HealthRepository {
  checkHealth(): Promise<HealthStatus>;
}


/* 
2.
Repository
The repository is responsible for interacting with the data source, which could be a database, a file system, or an API. In the case of the HealthStatus service, you need to create a repository to store and retrieve the health status data.

The repository should provide an interface that defines the methods for storing and retrieving data. This interface can be implemented by different repository classes, each of which can use a different data source.
 */