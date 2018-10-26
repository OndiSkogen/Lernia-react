import * as React from "react";
import { Container, Segment, Button } from "semantic-ui-react";
import { ApiService, ApiService2 } from "../services/ApiService";
import { connect } from "react-imperator";
import SearchBar from "./SearchBar";
import { ShowStops } from "./ShowStops";
import { ShowDepartures } from "./ShowDepartures";
import  Filter from "./Filter";

interface IHomeState {
    text: string;
    showStops: boolean;
    showDeps: boolean;
    showFilter: boolean;
}

export class Home extends React.Component<{}, IHomeState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            text: "",
            showStops: false,
            showDeps: false,
            showFilter: false
        };
    }

    private onTextChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        this.setState({ text: e.currentTarget.value });
    }

    private onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.which != 13) {
            return;
        }
        this.setState({showStops: true})
        return ApiService.search(this.state.text);
    }

    private onButtonClick = () => {
        this.setState({showStops: true})
        return ApiService.search(this.state.text);        
    }
    private onLiClick = (id: string) => {
        this.setState({showStops: false})
        return ApiService2.departures(id);
    }

    public render(): JSX.Element {
        return <Container>
            <Segment>
                <SearchBar searchText={this.state.text}
                    enterSearch={this.onKeyUp}
                    click={() => this.onButtonClick()}
                    change={this.onTextChange} />
            </Segment>
            <Segment>
                if (showStops) {
                    <ShowStops stops={[]} click={this.onLiClick}/>
                }
                if (showFilter) {
                    <Filter />
                }
                if (showDeps) {
                    <ShowDepartures deps={[]} />
                }                
            </Segment>
        </Container>;
    }
}
