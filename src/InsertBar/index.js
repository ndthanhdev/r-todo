import React from 'react';
import Button from "material-ui/Button";
import TextField from 'material-ui/TextField'
import Card, { CardActions, CardContent, CardHeader } from 'material-ui/Card';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';
import Checkbox from 'material-ui/Checkbox';

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
                <List>
                    <ListItem button>
                    <Checkbox             />
                    <ListItemText primary="item"/>
                    <ListItemSecondaryAction>
                <IconButton aria-label="Comments">
                  <EditIcon />
                </IconButton>
              </ListItemSecondaryAction>
                    </ListItem>
                </List>
            </Card>
        );
    }
}