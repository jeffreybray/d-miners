import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DiscussionForum from './DiscussionForum';
import Collabrate from "./Collabrate";
import Dashboard from "./Dashboard";


const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,

    }
});
// const imgMyimageexample = require("img.png");
// const divStyle = {
//   width: '88%',
//   height: '800px',
//   backgroundImage: `url(${imgMyimageexample})`,
//   backgroundSize: 'cover'
// };
class SimpleTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { classes } = this.props;
        const { value } = this.state;

        return (
            <div className={classes.root} >
                <AppBar position="static">
                    <Tabs className={classes.root} value={value} onChange={this.handleChange} centered textColor="primary" indicatorColor="primary">
                        <Tab  label="Collabarate" href="#basic-tabs"/>

                        <Tab label="Discussion Forum" href="#basic-tabs" />
                        {<Tab  label="Dashboard" href="#basic-tabs"/>}
                    </Tabs>
                </AppBar>
                {value === 0 && <Collabrate/>}

                {value === 1 && <DiscussionForum/>}
                {value === 2 && <Dashboard/>}
            </div>
        );
    }
}

SimpleTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);