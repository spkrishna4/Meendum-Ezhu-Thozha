import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from'@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton'; 
import Sidedrawer from './Sidedrawer';
class Header extends Component {
    state={
        drawerOpen:false,
        headershow:false
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handlescroll);
    }
    handlescroll=()=>{
        if(window.scrollY>0)
        {
            this.setState({headershow:true})
        }
        else
        {
            this.setState({headershow:false})
        }
    }
    toggledrawer=(value)=>{
        this.setState({
            drawerOpen:value
        })
    }
    
    
    
    render() {
       
        return (
            <div>
                <AppBar
                position="fixed"
                style={
                    {
                        backgroundColor:this.state.headershow ? '#2f2f2f':"transparent" ,
                        boxShadow:'none',
                        padding:'10px 0px'
                    }
                }>
                    <Toolbar>
                    <div className="header_logo">
                    <div className="font_righteous header_logo_venue">Meendum Ezhu Thozha

                    </div>

                    <div className="header_logo_title">
                    A Social Event
                    </div>
                    </div>
                    
                    <IconButton
                    aria-label="Menu"
                    onClick={()=>this.toggledrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Sidedrawer
                    open={this.state.drawerOpen}
                    onClose={(value)=>this.toggledrawer(value)}/>
                    
                    </Toolbar></AppBar>
            </div>
        );
    }
}

export default Header;