import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacePipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { MrFixitComponent } from './mr-fixit/mr-fixit.component';
import { IncubatorComponent } from './incubator/incubator.component';
import { PostyourheartComponent } from './postyourheart/postyourheart.component';
import { ExposedComponent } from './exposed/exposed.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacePipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent,
    AboutusComponent,
    ContactusComponent,
    MrFixitComponent,
    IncubatorComponent,
    PostyourheartComponent,
    ExposedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:"welcome" , component: WelcomeComponent},
      { path: 'aboutUs', component: AboutusComponent },
      { path:'contactus', component: ContactusComponent },
      { path:'products', component: ProductListComponent },
      { path:"mrfixit" , component: MrFixitComponent},
      { path: 'postyourheart', component: PostyourheartComponent },
      { path:'incubator', component: IncubatorComponent },
      { path:'exposed', component: ExposedComponent },
      { path:'product/:id', component: ProductDetailComponent },
      { path:'', redirectTo: 'welcome', pathMatch: 'full'},
      { path:'**', redirectTo:'welcome',  pathMatch:'full'},
     
      
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
