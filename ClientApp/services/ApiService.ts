import { update } from "react-imperator";
import { Stop, Stops } from "../interfaces/sl";

export const ApiService = (() => {
    return {
        search: (term: string) => {
            return fetch(`api/search/${term}/`)
                .then<Stops>(resp => resp.json())
                .then(list => {
                    console.log(list);
                    update<Stop[]>("stops", () => list.Stop);
                });
        }
    }
})();