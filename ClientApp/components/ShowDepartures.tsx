import * as React from "react";
import { connect } from "react-imperator";
import { Departure } from "../interfaces/sl";
import { List } from "semantic-ui-react";

interface IShowDepsProps {
    deps?: Departure[];
    buss: boolean;
    tunnelbana: boolean;
    pendel: boolean;
}

export const ShowDepartures = connect((props: IShowDepsProps) => {
    return <List>
        {props.deps && props.deps.filter(dep => filterHelper(dep, props)).map((dep, index) =>
            <List.Item key={dep.time + index}>
                <List.Content>
                    <List.Header as='a'>
                        {dep.time + ": " + dep.name + " mot " + dep.direction}
                    </List.Header>
                </List.Content>
            </List.Item>)}
    </List>
},['deps']);

const filterHelper = (dep: any, props: any) => {
    const { catCode } = dep.Product;
    
     const noneSet = !(props.tunnelbana || props.buss || props.pendel);
     // tslint:disable-next-line:triple-equals
     return noneSet || (props.tunnelbana && catCode == 5) || (props.pendel && catCode == 4) || (props.buss && catCode == 7);
}
