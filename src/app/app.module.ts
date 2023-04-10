import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './pages/users/users.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { UsersService } from './services/users.service';
import { ProductService } from './services/product.service';
import { CartComponent } from './pages/Cart/cart.component';
import { UserDetailComponent } from './pages/users/user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
