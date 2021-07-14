
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { PortofolioComponent } from "./portofolio/portofolio.component";

const APP_ROUTING : Routes = [
    {
        path :'',
        component :HomeComponent
    },
    {
        path :'about',
        component :AboutComponent
    },
    {
        path :'contact',
        component :ContactComponent
    },
    {
        path :'works',
        component :PortofolioComponent
    }

]

export const ROUTING = RouterModule.forRoot(APP_ROUTING)