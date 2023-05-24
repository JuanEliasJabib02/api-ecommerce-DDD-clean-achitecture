import { createContainer, asClass, InjectionMode } from 'awilix';
import { AuthController } from './web/controller/auth-controller';
const container = createContainer({
  injectionMode: InjectionMode.PROXY
})

container.register({
  authController: asClass(AuthController).singleton()
});

export const authController = container.resolve("authController")
