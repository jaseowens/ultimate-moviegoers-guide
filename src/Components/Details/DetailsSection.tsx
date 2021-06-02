import { Divider, makeStyles, Typography } from "@material-ui/core"
import { FunctionComponent } from "react";

type SectionProps = {
    sectionHeader: string,
    divider?: boolean
}

const useStyle = makeStyles((theme) => ({
    wrapper: {
        margin: theme.spacing(2)
    },
    divider: {
        marginTop: theme.spacing(6)
    },
    header: {
        margin: theme.spacing(3, 0, 3, 0),
        color: theme.palette.common.white
    }
}));

const DetailsSection: FunctionComponent<SectionProps> = ({sectionHeader, divider, children}) => {
    const style = useStyle();

    return(
        <div className={style.wrapper}>
            { divider && <Divider className={style.divider} /> }
            <Typography className={style.header} variant="h4"> {sectionHeader} </Typography>
            {children}
        </div>
    );
}

export default DetailsSection;