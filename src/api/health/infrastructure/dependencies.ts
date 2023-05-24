import { createContainer, asClass, InjectionMode } from 'awilix';
import { HealthController } from './web/controller/health-controller';
import { CheckHealthUseCase } from '../application/check-health-usecase';
import { InMemoryHealthRepository } from './repositories/in-memory-health-repository';
;

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
