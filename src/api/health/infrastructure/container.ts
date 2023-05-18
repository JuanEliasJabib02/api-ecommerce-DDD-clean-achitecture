import { createContainer, asClass } from 'awilix';
import { HealthController } from './web/controller/health-controller';
import { HealthService } from '../domain/service/health-service';

const container = createContainer();


container.register({
  healthController: asClass(HealthController).singleton(),
  healthService: asClass(HealthService).singleton()
});

export { container };
