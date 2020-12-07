import React  from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function TodoItem({items}) {

    return(
        <List component="nav" aria-label="main mailbox folders" className="nav_list">
            {items.map((item , index) => {
                return(
                    <ListItem button key={index}>
                        <ListItemText primary={item.name} />
                    </ListItem>
                )
            })}
        </List>
    )
}

export default TodoItem;