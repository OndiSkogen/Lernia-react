import * as React from "react";
import { Container, Segment, Button } from "semantic-ui-react";
import { ApiService, ApiService2 } from "../services/ApiService";
import SearchBar from "./SearchBar";
import { ShowStops } from "./ShowStops";
import { ShowDepartures } from "./ShowDepartures";
import Filter from "./Filter";

interface IHomeState {
    text: string;
    showStops: boolean;
    showDeps: boolean;
    buss: boolean;
    tunnelbana: boolean;
    pendel: boolean;
}

export class Home extends React.Component<{}, IHomeState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            text: "",
            showStops: false,
            showDeps: false,
            buss: true,
            tunnelbana: true,
            pendel: true
        };
    }

    private onTextChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        this.setState({ text: e.currentTarget.value });
    }

    private onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.which != 13) {
            return;
        }
        this.setState({ showStops: true })
        return ApiService.search(this.state.text);
    }

    private onButtonClick = () => {
        this.setState({ showStops: true })
        return ApiService.search(this.state.text);
    }

    private onLiClick = (id: string) => {
        this.setState({ showStops: false, showDeps: true })
        return ApiService2.departures(id);
    }

    private onClearClick = () => {
        this.setState({ showDeps: false, showStops: false, text: '' })
    }

    handleInputChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
        const target = event.currentTarget;
        const value = target.checked;
        const name: keyof IHomeState = target.name as keyof IHomeState;
        const state = {
            [name]: value
        };

        this.setState(state as any);
    }

    public render(): JSX.Element {
        const showStops = this.state.showStops;
        const showDeps = this.state.showDeps;
        if (showStops) {
            return <Container>
                <Segment>
                    <SearchBar searchText={this.state.text}
                        enterSearch={this.onKeyUp}
                        click={() => this.onButtonClick()}
                        clearClick={() => this.onClearClick()}
                        change={this.onTextChange} />
                    <ShowStops stops={[]} click={this.onLiClick} />
                </Segment>
            </Container>
        } else if (showDeps) {
            return <Container>
                <Segment>
                    <SearchBar searchText={this.state.text}
                        enterSearch={this.onKeyUp}
                        click={() => this.onButtonClick()}
                        clearClick={() => this.onClearClick()}
                        change={this.onTextChange} />
                    <Filter buss={this.state.buss} tunnelbana={this.state.tunnelbana} pendel={this.state.pendel} change={this.handleInputChange} />
                    <ShowDepartures buss={this.state.buss} tunnelbana={this.state.tunnelbana} pendel={this.state.pendel} />
                </Segment>
            </Container>;
        } else {
            return <Container>
                <Segment>
                    <SearchBar searchText={this.state.text}
                        enterSearch={this.onKeyUp}
                        click={() => this.onButtonClick()}
                        clearClick={() => this.onClearClick()}
                        change={this.onTextChange} />
                </Segment>
            </Container>
        }
    }
}
