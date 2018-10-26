import * as React from "react";
import { connect } from "react-imperator";
import { Deps, Product, RootObject, Departure } from "../interfaces/sl";
import { List } from "semantic-ui-react";

interface IShowDepsProps {
    deps: Departure[];
}

export const ShowDepartures = connect((props: IShowDepsProps) => {
    console.log(props.deps);
    return <List>
        {props.deps.map((dep, index) =>
            <List.Item key={dep.time + index}>
                <List.Content>
                    <List.Header as='a'>
                        {dep.time + ": " +dep.name + " mot " + dep.direction}
                    </List.Header>
                </List.Content>
            </List.Item>)}
    </List>
}

);