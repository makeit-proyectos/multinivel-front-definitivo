import {
    ComponentFactoryResolver,
    Injectable,
    Inject,
    ReflectiveInjector,
    ViewContainerRef
  } from '@angular/core'
  
  import { DynamicComponent } from 'src/app/components/pedidos/dynamic.component'
  
  @Injectable({
    providedIn:"root"
  })
  export class LoaderService {
    rootViewContainer: ViewContainerRef;

    constructor(private factoryResolver: ComponentFactoryResolver) {
      this.factoryResolver = factoryResolver
    }
  
    setRootViewContainerRef(viewContainerRef) {
      this.rootViewContainer = viewContainerRef
    }
  
    addDynamicComponent() {
      const factory = this.factoryResolver
                          .resolveComponentFactory(DynamicComponent)
      const component = factory
        .create(this.rootViewContainer.parentInjector)
      this.rootViewContainer.insert(component.hostView)
    }
  
  }