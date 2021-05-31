import { makeStyles, List, ListItem, ListItemText, Drawer, ListItemIcon, IconButton, Divider } from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { useHistory } from "react-router";
import { NavigationItems, SIDE_DRAWER_WIDTH } from "../Helpers/Constants";
import clsx from 'clsx';

const useStyle = makeStyles((theme) => ({
    drawer: {
        width: SIDE_DRAWER_WIDTH,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerBackground: {
        width: SIDE_DRAWER_WIDTH,
        borderRightWidth: 0
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawerOpen: {
        width: SIDE_DRAWER_WIDTH,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    listItem: {
        padding: theme.spacing(2, 0, 2, 3)
    },
    listItemText: {
        margin: 0
    }
}));

const SideBar = (props: {isOpen: boolean, handleDrawerClose: any, navItems: NavigationItems[]}) => {
    const style = useStyle();
    const history = useHistory();

    return(
        <Drawer
        variant="permanent"
        className={clsx(style.drawer, {
          [style.drawerOpen]: props.isOpen,
          [style.drawerClose]: !props.isOpen,
        })}
        classes={{
          paper: clsx({
            [style.drawerOpen]: props.isOpen,
            [style.drawerClose]: !props.isOpen,
          }),
        }}
      >
        <div className={style.toolbar}>
          <IconButton onClick={props.handleDrawerClose}>
            {<ChevronLeft />}
          </IconButton>
        </div>

        <Divider />

        <List>
            {props.navItems.map(navigationItem => (

                <ListItem button className={style.listItem} key={navigationItem.path} onClick={() => history.push(navigationItem.path)} >
                    <ListItemIcon>
                        {navigationItem.icon}
                    </ListItemIcon>
                    {props.isOpen && <ListItemText className={style.listItemText} secondary={navigationItem.text} /> }
                </ListItem>

            ))}
        </List>
    </Drawer>

    )
};

export default SideBar;