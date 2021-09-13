import { TourSchema } from '../models/tour.model';
import { ITOURDOCUMENT } from '../types/documents/tour.document'

export class MainTour {
    constructor() { }

    /**
    *Add new Buss 
    */
    addTour(Tour: ITOURDOCUMENT) {
        return new TourSchema(Tour).save();
    }
    /**
    *Get single Tour 
    */
    getTour(_id: string) {
        return TourSchema.findById(_id);
    }

    /**
    *Get All Tour 
    */
    getAllTour() {
        return TourSchema.find();
    }

    /**
    *Delete Tour 
    */
    deleteTour(id: string) {
        return TourSchema.findByIdAndDelete(id);
    }

    /**
    *Update Tour 
    */
    updateTour(Tour: ITOURDOCUMENT) {
        return TourSchema.findByIdAndUpdate(Tour._id, Tour, {
            new: true
        });
    }
}