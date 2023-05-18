import { createContainer, asClass, InjectionMode, asValue } from 'awilix';
import { HealthController } from './web/controller/health-controller';
import { HealthService } from '../domain/service/health-service';
import { InMemoryHealthRepository } from './persistence/repositories/in-memory-health-repository';
import { HealthStatus } from "../domain/model/health-status"

const container = createContainer({
  injectionMode: InjectionMode.PROXY
})




container.register({
  healthController: asClass(HealthController).singleton(),
  healthService: asClass(HealthService).singleton(),
  healthRepository: asClass(InMemoryHealthRepository).singleton(),

});


console.log("health-container", container.registrations)

export const healthController = container.resolve<HealthController>("healthController")
export const healthService = container.resolve<HealthService>("healthService")



export default container
