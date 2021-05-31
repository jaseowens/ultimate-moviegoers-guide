import { makeStyles } from "@material-ui/core";
import { FunctionComponent } from "react";
import React from "react";
import clsx from 'clsx';
import TopBar from "./TopBar";
import SideBar from "./SideBar";
import { useScreenWidth } from "../Helpers/ScreenSize";
import { PlayArrowRounded, BarChartOutlined, Whatshot, SearchOutlined } from "@material-ui/icons";
import { NavigationItems, NaviationTitles, NaviationPaths } from "../Helpers/Constants";
import BottomBar from "./BottomBar";

const useStyle = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },  
    mainContent: {
        backgroundColor: '#ff0000'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        background: theme.palette.background.default
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    bottomBar: {
        position: "sticky",
        bottom: 0
    }
}));

const Layout: FunctionComponent = ({ children }) => {
    const style = useStyle();
    const  breakpoint = useScreenWidth();
    const [open, setOpen] = React.useState(false);

    const Navigation_Items: Array<NavigationItems> = [
        {
            text: NaviationTitles.NOW_PLAYING,
            path: NaviationPaths.NOW_PLAYING,
            icon: <PlayArrowRounded />
        },
        {
            text: NaviationTitles.POPULAR,
            path: NaviationPaths.POPULAR,
            icon: <BarChartOutlined />
        },
        {
            text: NaviationTitles.TOP_RATED,
            path: NaviationPaths.TOP_RATED,
            icon: <Whatshot />
        },
        {
            text: NaviationTitles.SEARCH,
            path: NaviationPaths.SEARCH,
            icon: <SearchOutlined />
        },
    ];

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
        <div className={style.root}>

            <TopBar isOpen={open} handleDrawerOpen={handleDrawerOpen}></TopBar>

            { breakpoint !== 'xs' && breakpoint !== 'sm' && <SideBar navItems={Navigation_Items} isOpen={open} handleDrawerClose={handleDrawerClose}></SideBar> }

            <div className={
                clsx(style.content, {
                    [style.contentShift]: open,
            })}>
                <div className={style.drawerHeader} />
                {children}
            </div>
        </div>
        { (breakpoint === 'xs' || breakpoint === 'sm') && <div className={style.bottomBar}><BottomBar navItems={Navigation_Items}></BottomBar></div> }
        </>

    )
}

export default Layout;