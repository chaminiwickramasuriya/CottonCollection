import {Customer} from "./customer";
import {Reservation} from "./reservation";
export class Orders {
  oId:number;
  date:string;
  customer:Customer;
  reservationDTOs: Array<Reservation>;
}
