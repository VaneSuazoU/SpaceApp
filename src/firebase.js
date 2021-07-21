import {firebase} from "./config";

const db = firebase.firestore();

const savebooking = async (data) => {

    try {
        const newBooking = {
            id: data.id,
            date: data.date,
            startTime: data.startTime,
            endTime: data.endTime,
            place: data.place,
            type: data.type,
            attendees: data.attendees,
            chair: data.chair
        };

        await db.collection("space_request").add(newBooking);
    
    } catch (error) {
        console.log(error);
    }
};

export {savebooking};