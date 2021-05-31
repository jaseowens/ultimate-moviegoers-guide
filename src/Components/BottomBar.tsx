import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import { NavigationItems } from "../Helpers/Constants";

const BottomBar = (props: {navItems: NavigationItems[]}) => {
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
        >

            {props.navItems.map(navigationItem => (
                <BottomNavigationAction color='secondary' label={navigationItem.text} icon={navigationItem.icon} onClick={() => history.push(navigationItem.path)} />
            ))}
            
        </BottomNavigation>
    );
}

export default BottomBar;