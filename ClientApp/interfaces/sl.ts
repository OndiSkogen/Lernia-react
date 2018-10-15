//declare module SL {

    export interface Product {
        name: string;
        num: string;
        catCode: string;
        catOutS: string;
        catOutL: string;
        operatorCode: string;
        operator: string;
        operatorUrl: string;
    }

    export interface Stop {
        name: string;
        id: string;
        extId: string;
        routeIdx: number;
        lon: number;
        lat: number;
        depTime: string;
        depDate: string;
        arrTime: string;
        arrDate: string;
        rtDepTime: string;
        rtDepDate: string;
        rtDepTrack: string;
    }

    export interface Stops {
        Stop: Stop[];
    }

    export interface Departure {
        Product: Product;
        Stops: Stops;
        name: string;
        type: string;
        stop: string;
        stopid: string;
        stopExtId: string;
        time: string;
        date: string;
        direction: string;
        transportNumber: string;
        transportCategory: string;
        rtTime: string;
        rtDate: string;
        rtTrack: string;
    }

    export interface RootObject {
        Departure: Departure[];
    }

//}
