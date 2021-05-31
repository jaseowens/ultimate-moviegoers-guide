import { makeStyles, Typography, IconButton, Toolbar, AppBar } from "@material-ui/core";
import clsx from 'clsx';
import { APP_NAME, SIDE_DRAWER_WIDTH } from "../Helpers/Constants";
import { Menu } from "@material-ui/icons";
import { useScreenWidth } from "../Helpers/ScreenSize";

const useStyle = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.paper,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
      appBarShift: {
        marginLeft: SIDE_DRAWER_WIDTH,
        width: `calc(100% - ${SIDE_DRAWER_WIDTH}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    appBarHeaderMobile: {
        marginLeft: theme.spacing(3)
    }
}));


const TopBar = (props: {isOpen: boolean, handleDrawerOpen: any}) => {
    const style = useStyle();
    const  breakpoint = useScreenWidth();

    return (
        <AppBar
            elevation={0}
            position="fixed"
            className={clsx(style.appBar, {
                [style.appBarShift]: props.isOpen && breakpoint !== 'xs' && breakpoint !== 'sm',
            })}
        >
        <Toolbar>
            { breakpoint !== 'xs' && breakpoint !== 'sm' &&
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    className={clsx(style.menuButton, {
                        [style.hide]: props.isOpen,
                    })}
                >
                    <Menu />
                </IconButton>
            }
            <Typography 
                className={clsx({
                    [style.appBarHeaderMobile]: breakpoint === 'xs' || breakpoint === 'sm',
                })} 
                variant="h6" noWrap>
                { APP_NAME }
            </Typography>
        </Toolbar>
    </AppBar>

    )
}

export default TopBar;