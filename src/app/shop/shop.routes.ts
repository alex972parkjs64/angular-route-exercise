import { Routes } from "@angular/router";
import { CakeComponent } from "./cake/cake.component";
import { CheesecakeComponent } from "./cheesecake/cheesecake.component";
import { PieComponent } from "./pie/pie.component";
import { ShopComponent } from "./shop.component";

export enum ROUTER_TOKENS {
    CAKE = 'cake',
    CHEESECAKE = 'cheesecake',
    PIE = 'pie',    
}

export const ROUTES: Routes = [
    {
        path: 'shop',
        component: ShopComponent,
        children: [
            {   // TODO : practice lazy loading
                path: ROUTER_TOKENS.CAKE,
                component: CakeComponent   
            },
            {
                path: ROUTER_TOKENS.CHEESECAKE,
                component: CheesecakeComponent
            },
            {
                path: ROUTER_TOKENS.PIE,
                component: PieComponent
            }
        ]
    }
];