import { makeStyles, List, ListItem, ListItemText, Drawer, ListItemIcon, IconButton, Divider, Toolbar, AppBar } from "@material-ui/core";
import { ChevronLeft, SearchOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory } from "react-router";
import { NaviationPaths, NaviationTitles, NavigationItems, SIDE_DRAWER_WIDTH } from "../Constants/Constants";

const useStyle = makeStyles((theme) => ({
    drawer: {
        width: SIDE_DRAWER_WIDTH
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
}));

const SideBar = (props: {isOpen: boolean, handleDrawerClose: any}) => {
    const style = useStyle();
    const history = useHistory();

    const Navigation_Items: Array<NavigationItems> = [
        {
            text: NaviationTitles.NOW_PLAYING,
            path: NaviationPaths.NOW_PLAYING,
            icon: <SubjectOutlined />
        },
        {
            text: NaviationTitles.POPULAR,
            path: NaviationPaths.POPULAR,
            icon: <SubjectOutlined />
        },
        {
            text: NaviationTitles.TOP_RATED,
            path: NaviationPaths.TOP_RATED,
            icon: <SubjectOutlined />
        },
        {
            text: NaviationTitles.SEARCH,
            path: NaviationPaths.SEARCH,
            icon: <SearchOutlined />
        },
    ];

    return(
        <Drawer
            className={style.drawer}
            variant="persistent"
            anchor="left"
            open={props.isOpen}
            classes={{paper: style.drawerBackground}}
        >
        <div className={style.drawerHeader}>
            <IconButton onClick={props.handleDrawerClose}>
                {<ChevronLeft />}
            </IconButton>
        </div>

        <Divider />

        <List>
            {Navigation_Items.map(navigationItem => (

                <ListItem button key={navigationItem.path} onClick={() => history.push(navigationItem.path)} >
                    <ListItemIcon>
                        {navigationItem.icon}
                    </ListItemIcon>
                    <ListItemText primary={navigationItem.text} />
                </ListItem>

            ))}
        </List>
    </Drawer>

    )
};

export default SideBar;