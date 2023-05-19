import { createContainer, asClass, InjectionMode } from 'awilix';
import { HealthController } from '../controller/health-controller';
import { InMemoryHealthRepository } from '../../persistence/repositories/in-memory-health-repository';
import { CheckHealthUseCase } from '../../../application/usecases/check-health/check-health';

const container = createContainer({
  injectionMode: InjectionMode.PROXY
})

container.register({
  healthController: asClass(HealthController).singleton(),
  checkHealthUseCase: asClass(CheckHealthUseCase).singleton(),
  healthRepository: asClass(InMemoryHealthRepository).singleton(),

});

export const healthController = container.resolve<HealthController>("healthController")
export const checkHealthUseCase = container.resolve<CheckHealthUseCase>("checkHealthUseCase")
export const healthRepository = container.resolve<InMemoryHealthRepository>("healthRepository")

export default container
