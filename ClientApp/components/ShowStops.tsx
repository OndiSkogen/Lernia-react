import * as React from "react";
import { connect, update } from "react-imperator";
import { Stop } from "../interfaces/sl";
import { List, Image } from "semantic-ui-react";

interface IShowStopProps {
    stops: Stop[];
}


function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    console.log('The link was clicked.');
}



export const ShowStops = connect((props: IShowStopProps) => {
    return <List>
        {props.stops.map(stop =>
            <List.Item key={stop.id}>
                <List.Content>
                    <List.Header as='a' onClick={handleClick}>
                        {stop.name}
                    </List.Header>
                </List.Content>
            </List.Item>)}
    </List>
}

);