import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {
  clients = [
    {
      id: "client-1",
      logo: "../assets/airbnb.png",
    },
    {
      id: "client-2",
      logo: "../assets/binance.png",
    },
    {
      id: "client-3",
      logo: "../assets/coinbase.png",
    },
    {
      id: "client-4",
      logo: "../assets/dropbox.png",
    },
  ];
}
