import { createMuiTheme, Theme } from "@material-ui/core";

const theme: Theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#e84545'
        },
        secondary: {
            main: '#2b2e4a'
        }

    }
});

export default theme;