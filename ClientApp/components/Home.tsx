import * as React from "react";
import { Container, Segment, Button } from "semantic-ui-react";
import { ApiService } from "../services/ApiService";
import { connect } from "react-imperator";
import SearchBar from "./SearchBar";
import { ShowStops } from "./ShowStops";

interface IHomeState {
    text: string;
    list: string[];
}

export class Home extends React.Component<{}, IHomeState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            text: "",
            list: []
        };
    }

    private onTextChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        this.setState({ text: e.currentTarget.value });
    }

    private onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.which != 13) {
            return;
        }
        return ApiService.search(this.state.text);
    }

    private onButtonClick = () => {
        return ApiService.search(this.state.text);
    }

    public render(): JSX.Element {
        const { text, list } = this.state;
        return <Container>
            <Segment>
                <input value={text} onKeyUp={this.onKeyUp} onChange={this.onTextChange} />
                <button onClick={this.onButtonClick} disabled={!(text.trim())}>Sök</button>
            </Segment>
            <Segment>
                <ul>
                    {list.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
            </Segment>
            <Segment>
                {/* <ShowStops stops={[]} /> */}
            </Segment>
        </Container>;
    }
}
