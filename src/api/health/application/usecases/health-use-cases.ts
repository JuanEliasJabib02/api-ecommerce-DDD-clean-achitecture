import { HealthStatus } from '../../domain/model/health-status';
import { HealthRepository } from '../../domain/repository/health-repository';

export class HealthUseCases {
  private healthRepository: HealthRepository;
  constructor({ healthRepository }: { healthRepository: HealthRepository }) {
    this.healthRepository = healthRepository;
  }

  async checkHealth(): Promise<HealthStatus> {

    const healthStatus = await this.healthRepository.getHealthStatus();

    return healthStatus
  }
}
