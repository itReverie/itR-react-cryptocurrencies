import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import Divider from 'material-ui/Divider'
import IconButton from 'material-ui/IconButton'
import ChevronLeftIcon from 'material-ui-icons/ChevronLeft'
import ListSubheader from 'material-ui/List/ListSubheader'
import Hidden from 'material-ui/Hidden'
import { ListItem, ListItemText, ListItemIcon } from 'material-ui/List'
import { Link } from 'react-router-dom'
import AlarmClock from 'material-ui-icons/Alarm'
import ClockIcon from 'material-ui-icons/AccessTime'
import Input, { InputLabel } from 'material-ui/Input'
import { MenuItem } from 'material-ui/Menu'
import { FormControl } from 'material-ui/Form'
import Select from 'material-ui/Select'
import Button from 'material-ui/Button'


class AppDrawer extends Component {
  state = {
    formStyles: {
      display: 'none'
    }
  }
  handleChange = name => event => {
    console.log(event)
    this.setState({ [name]: event.target.value })
  }

  render () {
    const classes = this.props.classes

    const drawer = (
      <div className={classes.drawerInner}>
        <div className={classes.drawerHeader}>
          <ListItem>
            <Link to="/">
              <img
                className={classes.image}
                alt="logo"
                src="http://www.itreverie.com/githubimages/itR-crypto-portfolio-logo.png"
              />
            </Link>
          </ListItem>
          <IconButton
            className={classes.navIconHide}
            onClick={this.props.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>


        <Divider />
        <ListItem button>
          <ListItemText secondary={'Home'} />
        </ListItem>
        <ListItem button>
          <ListItemText secondary={'Coins'} />
        </ListItem>
      </div>
    )
    return (
      <div style={this.props.style}>
        <Hidden mdUp>
          <Drawer
            type="temporary"
            open={this.props.open}
            classes={{
              paper: classes.drawerPaper
            }}
            onRequestClose={this.props.handleDrawerToggle}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown implementation="css">
          <Drawer
            type="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </div>
    )
  }
  toggleForm = () => [
    this.setState({
      formStyles: {
        display: 'block'
      }
    })
  ]
}

export default AppDrawer;
