import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShopComponent } from './shop/shop.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export enum ROUTER_TOKENS {
    HOME = 'home',
    SHOP = 'shop',
    CONTACT = 'contact',
    ABOUT = 'about'
}

export const ROUTES: Routes = [
    {
        path: ROUTER_TOKENS.HOME,
        component: HomeComponent
    },
    {
        path: ROUTER_TOKENS.SHOP,
        component: ShopComponent,
        loadChildren: () => import('./shop/shop.routes').then(m => m.ROUTES)
    },
    {
        path: ROUTER_TOKENS.CONTACT,
        component: ContactComponent
    },
    {
        path: ROUTER_TOKENS.ABOUT,
        component: AboutComponent
    },
    {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
