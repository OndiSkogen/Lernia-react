import * as React from "react";
import { connect, update } from "react-imperator";
import { Stop } from "../interfaces/sl";
import { List, Image } from "semantic-ui-react";

interface IShowStopProps {
    stops: Stop[];
}

export const ShowStops = connect((props: IShowStopProps) =>
    <List>
        {props.stops.map(stop =>
            <List.Item key={stop.id}>
                <List.Content>
                    <List.Header>
                        {stop.name}
                    </List.Header>
                    <List.Description>List description</List.Description>
                </List.Content>
            </List.Item>)}
    </List>
);