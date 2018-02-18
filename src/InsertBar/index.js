import React from 'react';
import Button from "material-ui/Button";
import TextField from 'material-ui/TextField'
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';

export default class Insertbar extends React.Component {
    constructor(props) {
        super(props);
        this.setState({
            text: ""
        });
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(oEvent) {
        this.setState({
            text: oEvent.target.value
        });
    }

    render() {
        return (
            <Card>
                <Card>
                    <CardContent>
                        <TextField label="Content" onChange={this.handleChange}></TextField>
                    </CardContent>
                    <CardActions>
                        <Button variant="raised" color="primary" onClick={() => this.props.onAddTodo(this.state.text)} >Add</Button>
                    </CardActions>
                </Card>
            </Card>
        );
    }
}