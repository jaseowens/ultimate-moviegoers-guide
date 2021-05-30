import { makeStyles, Typography, IconButton, Toolbar, AppBar } from "@material-ui/core";
import clsx from 'clsx';
import { APP_NAME, SIDE_DRAWER_WIDTH } from "../Constants/Constants";
import { Menu } from "@material-ui/icons";

const useStyle = makeStyles((theme) => ({
    appBar: {
        backgroundColor: theme.palette.background.paper,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${SIDE_DRAWER_WIDTH}px)`,
        marginLeft: SIDE_DRAWER_WIDTH,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    hide: {
        display: 'none',
    }
}));


const TopBar = (props: {isOpen: boolean, handleDrawerOpen: any}) => {
    const style = useStyle();

    return (
        <AppBar
        position="fixed"
        className={clsx(style.appBar, {
            [style.appBarShift]: props.isOpen,
        })}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={props.handleDrawerOpen}
                edge="start"
                className={clsx(style.menuButton, props.isOpen && style.hide)}
            >
                <Menu />
            </IconButton>
            <Typography variant="h6" noWrap>
                { APP_NAME }
            </Typography>
        </Toolbar>
    </AppBar>

    )
}

export default TopBar;