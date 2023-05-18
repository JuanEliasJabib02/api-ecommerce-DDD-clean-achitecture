import { HealthStatus } from "../../../domain/model/health-status";
import { HealthRepository } from "../../../domain/repository/health-repository";



export class InMemoryHealthRepository implements HealthRepository {
  private healthStatus: HealthStatus | null;

  constructor() {
    this.healthStatus = {
      status: "ok",
      "message": "app runinng good",
      uptime: process.uptime()
    };
  }
  public async getHealthStatus(): Promise<any> {
    return this.healthStatus
  }

}
