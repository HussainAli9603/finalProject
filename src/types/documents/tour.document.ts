import { Document, Schema } from "mongoose";
export interface ITOURDOCUMENT extends Document {
    _id: string;
    Destinations: Array<string>;
    Date: Date;
    Participants: number;
    Phone: string;
    Name: string;
    BusAlloted: Array<string>
}
