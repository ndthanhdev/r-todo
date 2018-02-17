import React from 'react';
import Button from "material-ui/Button";
import TextField from 'material-ui/TextField'
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';

export default class Insertbar extends React.Component {
    render() {
        return (
            <Card>
                <Card>
                    <CardContent>
                        <TextField label="Content"></TextField>
                    </CardContent>
                    <CardActions>
                        <Button variant="raised" color="primary">Add</Button>
                    </CardActions>
                </Card>               
            </Card>
        );
    }
}