import { HealthRepository } from '../repository/health-repository';

export class HealthService {
  private healthRepository: HealthRepository;
  constructor(healthRepository: HealthRepository) {
    this.healthRepository = healthRepository;
  }

  async checkHealth(): Promise<void> {

    console.log("in the service checkHealth")
    /*  const healthStatus = await this.healthRepository.getHealthStatus(); */
  }
}
