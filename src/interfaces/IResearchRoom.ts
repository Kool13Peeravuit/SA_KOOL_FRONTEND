
import { PlaceClassInterface } from "./IPlaceClass";
import { RoomTypesInterface } from "./IRoomType";

export interface ResearchRoomsInterface {
    ID?: number,
    Name: string,
    RoomTypeID?: number,
    RoomType?: RoomTypesInterface,
    Place_Class_ID?: number,
    Place_Class? : PlaceClassInterface,


}