// Add Tours Response Interface
export interface ITourResponse {
    TourDestinations: Array<string>;
    TourDate: Date;
    TourParticipants: number;
    BussesAlloted: Array<ISingleBUSS>
}

/**
 *  Single Bus interface 
 */
interface ISingleBUSS {
    _id: string;
    BussName: string;
    BussSeats: number;
}


export interface IGetTourResponse {
    _id: string;
    participants: string;
    bookingDate: string;
    destination: string;
    person: string;
    createdAt?: Date | any;
    updatedAt?: Date | any
}

export interface IUpdateTourResponse {
    _id: string;
    participants: string;
    bookingDate: string;
    destination: string;
    person: string;
    createdAt?: Date | any;
    updatedAt?: Date | any
}

export interface IAllTourResponse {
    _id: string;
    participants: string;
    bookingDate: string;
    destination: string;
    person: string;
    createdAt?: Date | any;
    updatedAt?: Date | any
}