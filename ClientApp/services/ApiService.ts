import { update } from "react-imperator";
import { Stop, Stops, Deps, Product } from "../interfaces/sl";

export const ApiService = (() => {
    return {
        search: (term: string) => {
            return fetch(`api/search/${term}/`)
                .then<Stops>(resp => resp.json())
                .then(list => {
                    update<Stop[]>("stops", () => list.StopLocation);
                });
        }
    }
})();

export const ApiService2 = (() => {
    return {
        departures: (deps: string) => {
            return fetch(`api/departures/${deps}`)
            .then<any>(resp => resp.json())
            .then(list => {           
                update<Product[]>("deps", () => list.Departure.slice(0, 50));
            });
        }
    }
})();