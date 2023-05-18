import { createContainer, asClass, InjectionMode, asValue } from 'awilix';
import { HealthController } from './web/controller/health-controller';
import { InMemoryHealthRepository } from './persistence/repositories/in-memory-health-repository';
import { HealthUseCases } from '../application/usecases/health-use-cases';


const container = createContainer({
  injectionMode: InjectionMode.PROXY
})




container.register({
  healthController: asClass(HealthController).singleton(),
  healthUseCases: asClass(HealthUseCases).singleton(),
  healthRepository: asClass(InMemoryHealthRepository).singleton(),

});


console.log("health-container", container.registrations)

export const healthController = container.resolve<HealthController>("healthController")
export const healthUseCases = container.resolve<HealthUseCases>("healthUseCases")



export default container
