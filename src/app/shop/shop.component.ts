import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

import { ROUTER_TOKENS } from './shop.routes';

@Component({
  selector: 'app-shop',
  imports: [RouterOutlet ,RouterLink, RouterModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  readonly ROUTER_TOKENS = ROUTER_TOKENS;
}
