import { HealthStatus } from '../model/health-status';
import { HealthRepository } from '../repository/health-repository';

export class HealthService {
  private healthRepository: HealthRepository;
  constructor({ healthRepository }: { healthRepository: HealthRepository }) {
    this.healthRepository = healthRepository;
  }

  async checkHealth(): Promise<HealthStatus> {

    const healthStatus = await this.healthRepository.getHealthStatus();

    return healthStatus
  }
}
