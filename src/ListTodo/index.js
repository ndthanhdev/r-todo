import React from 'react';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Button from "material-ui/Button";
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';
import Checkbox from 'material-ui/Checkbox';

export default class ListTodo extends React.Component {
    render() {
        return (
            <List>
                <ListItem button>
                    <Checkbox />
                    <ListItemText primary="item" />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Comments">
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        );
    }
}