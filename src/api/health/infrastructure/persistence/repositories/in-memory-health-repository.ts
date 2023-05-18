import { HealthStatus } from "../../../domain/model/health-status";
import { HealthRepository } from "../../../domain/repository/health-repository";



export class InMemoryHealthRepository implements HealthRepository {
  private healthStatus: HealthStatus | null;

  constructor() {
    this.healthStatus = null;
  }

  public async getHealthStatus(): Promise<any> {
    console.log("in the memory repository")



  }

}
