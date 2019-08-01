import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const Sidedrawer = (props) => {
    return (
        <Drawer
        anchor="right"
        open={props.open}
        onClose={()=>props.onClose(false)}
        >
            <List>
                <ListItem button onClick={()=>console.log('Featured')}>Event starts in</ListItem>
                <ListItem button onClick={()=>console.log('Venue Info')}>Venue Info</ListItem>
                <ListItem button onClick={()=>console.log('highlights')}>Highlights</ListItem>
                <ListItem button onClick={()=>console.log('pricing')}>Pricing</ListItem>
                <ListItem button onClick={()=>console.log('location')}>Location</ListItem>
            </List>
        </Drawer>
    );
};

export default Sidedrawer;