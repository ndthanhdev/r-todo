import React from 'react';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Button from "material-ui/Button";
import IconButton from 'material-ui/IconButton';
import EditIcon from 'material-ui-icons/Edit';
import Checkbox from 'material-ui/Checkbox';

export default class ListTodo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let items = this.props.todos.map(todo => {
            return (
                <ListItem button>
                    <Checkbox />
                    <ListItemText primary={todo} />
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Comments">
                            <EditIcon />
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
            );
        });
        return (
            <List>
                {items}
            </List>
        );
    }
}