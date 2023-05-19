import { HealthStatus } from '../../../domain/model/health-status';
import { HealthRepository } from '../../../domain/repository/health-repository';
import { HealthCheckError } from './errors/health-check-error';

export class CheckHealthUseCase {
  private healthRepository: HealthRepository;

  constructor({ healthRepository }: { healthRepository: HealthRepository }) {
    this.healthRepository = healthRepository;
  }

  async execute(): Promise<HealthStatus> {
    try {
      const healthStatus = await this.healthRepository.getHealthStatus();

      if (healthStatus === null || healthStatus === undefined) {
        throw new HealthCheckError('Invalid health status.');
      }


      return healthStatus;
    } catch (error: any) {
      const errMessage = error.message || 'Unexpected error occurred'
      throw new HealthCheckError(errMessage);
    }
  }
}