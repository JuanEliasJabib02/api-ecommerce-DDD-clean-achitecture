import { HealthStatus } from "./health-status-entity";

export interface HealthRepository {
  getHealthStatus(): Promise<HealthStatus>;
}
