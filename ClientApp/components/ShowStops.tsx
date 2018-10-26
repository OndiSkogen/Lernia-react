import * as React from "react";
import { connect } from "react-imperator";
import { Stop } from "../interfaces/sl";
import { List } from "semantic-ui-react";

interface IShowStopProps {
    stops: Stop[];
    click: (id: string) => any;
}

export const ShowStops = connect((props: IShowStopProps) => {
    return <List>
        {props.stops.map(stop =>
            <List.Item key={stop.id}>
                <List.Content>
                    <List.Header as='a' onClick={() => props.click(stop.id)}>
                        {stop.name}
                    </List.Header>
                </List.Content>
            </List.Item>)}
    </List>
});