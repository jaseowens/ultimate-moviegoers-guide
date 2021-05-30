import { createMuiTheme, Theme } from "@material-ui/core";

const theme: Theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            // main: '#e84545'
            main: '#2b2e4a'
        },
        secondary: {
            main: '#e84545'
        }

    }
});

export default theme;