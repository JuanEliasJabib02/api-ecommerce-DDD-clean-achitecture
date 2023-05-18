import { Context, Next } from 'koa';
import { HealthService } from '../../../domain/service/health-service';
import { container } from '../../container';



export class HealthController {
  async check(ctx: Context, next: Next): Promise<void> {
    try {
      const healthService = container.resolve<HealthService>('healthService');

      const healthStatus = await healthService.checkHealth();

      ctx.status = 200;
      ctx.body = {
        healthStatus
      }

    } catch (error) {
      //  re-throw it to propagate to the middle stack and reach the global errors+
      throw error;
    }
  }
}










/* -------NOTES-------- 

      const healthService = container.resolve<HealthService>('healthService');

In TypeScript, classes can be used as both types and values. When you use a class as a type, you are referring to the instance type of that class, which represents the shape and behavior of the class instances.

In the context of dependency injection, when you register a class as a service in your container, you typically want to resolve an instance of that class. By using the class as a type parameter, such as <HealthService>, you are indicating that you expect the resolved instance to be an instance of the HealthService class specifically.

Using the class as a type parameter provides several benefits:

Type Safety: It allows the TypeScript compiler to perform type checking and ensure that you are using the resolved instance correctly based on the class's shape and behavior.
Intellisense and Autocompletion: It enables your development environment (IDE) to provide accurate suggestions, autocompletion, and documentation based on the class's members and methods.
Refactoring Support: If you need to rename or refactor the class, using the class as a type parameter ensures that the references to the resolved instance will also be updated accordingly
Using a class as a type parameter is a common and recommended practice in dependency injection frameworks like Awilix. It provides several advantages, as mentioned earlier, such as type safety, intellisense support, and refactoring capabilities.

While using a type alias (interface or custom type) instead of a class as a type parameter is possible, it may not provide the same level of benefits. Here are a few reasons why using a class is preferred over a type alias in this context:

Constructor Injection: When resolving dependencies, classes are instantiated using their constructors. Using a class as a type parameter allows the container to create a new instance of that class and automatically inject any required dependencies through the constructor. Type aliases, on the other hand, do not have constructors, so they cannot be instantiated in the same way.

Behavior and Methods: Classes can define methods and behavior, in addition to properties. By using the class as a type parameter, you can access and invoke the methods of the resolved instance, which is particularly useful when working with service-oriented architectures.

Explicit Type Declaration: Using a class as a type parameter explicitly states that you expect an instance of that class. It provides clarity and documentation to other developers working with the codebase, making it easier to understand the expected types and interactions.

However, there might be scenarios where using a type alias makes more sense. For example, if you have a complex object structure with properties and sub-properties but without behavior, defining a type alias can be a reasonable choice.

In general, it's best to follow the established patterns and practices of the dependency injection framework you are using. If the framework supports using classes as type parameters, it's recommended to utilize them for the benefits they provide in terms of type safety and developer experience..

N*/