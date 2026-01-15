import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { ShibaDogModule } from './modules/shiba-dog/shiba-dog.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, ShibaDogModule],
  providers: [],
  bootstrap: [], // No bootstrap component
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {}

  ngDoBootstrap(appRef: ApplicationRef): void {
    if (!customElements.get('child-app')) {
      const ce = createCustomElement(AppComponent, {
        injector: this.injector,
      });
      customElements.define('child-app', ce);
    }
  }
}
