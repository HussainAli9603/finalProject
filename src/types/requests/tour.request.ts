export interface ITourRequest {
    Destinations: Array<string>;
    Date: "yyyy-mm-dd";
    Participants: number
}

export interface IGetTour {
    _id: string;
}

export interface IUpdateTourRequest {
    _id: string;
    participants: string;
    bookingDate: string;
    destination: string;
    person: string;
}

export interface IDeleteTour {
    _id: string;
}