import * as React from "react";
import { connect, update } from "react-imperator";
import { Stop } from "../interfaces/sl";
import { List, Image } from "semantic-ui-react";

interface IShowStopProps {
    stops: Stop[];
}

export const ShowStops = connect((props: IShowStopProps) => {
    console.log(props);
    return <List>
        {props.stops.map(stop =>
            <List.Item key={stop.id}>
                <List.Content>
                    <List.Header as='a'>
                        {stop.name}
                    </List.Header>
                </List.Content>
            </List.Item>)}
    </List>
}

);