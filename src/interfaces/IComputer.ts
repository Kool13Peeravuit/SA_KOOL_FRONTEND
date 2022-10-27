import { Computer_ossInterface } from "./IComputer_os";
import { PlaceClassInterface } from "./IPlaceClass";

export interface ComputersInterface{
	ID: number,
    Comp_name: string,
	Comp_room: string,
	Computer_os_id: number,
	Computer_os?: Computer_ossInterface;
  Place_Class_ID?: number,
  Place_Class?: PlaceClassInterface
}