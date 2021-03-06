import { NgModule } from "@angular/core";
import { BannerComponent } from "./banner/banner.component";
import { HomeComponent } from "./home.component";

import { HomeRoutingModule } from "../home/components/home-routing.module";
@NgModule({
    declarations:[
        BannerComponent,
        HomeComponent,
    ],
    imports:[
        HomeRoutingModule
    ]
})
export class HomeModule {

}