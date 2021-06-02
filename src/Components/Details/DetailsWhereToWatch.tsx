import { useEffect, useState } from "react";
import { getWatchProviders, POSTER_BASE_URL } from "../../Services/tmdbAPI";
import { ProviderResult } from "../../Services/tmdbDTO";
import { makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    sectionHead: {
        color: theme.palette.common.white
    },
    scrollWrap: {
        maxWidth: '70vw',
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto'
    },
    provider: {
        flex: '0 0 auto',
        padding: theme.spacing(1)
    }
}));

const DetailsWhereToWatch = (props: {id: number | undefined}) => {
    const [providers, setProviders] = useState<ProviderResult>();
    const style = useStyle();

    useEffect(() => {
        const fetchDetails = async () => {
            if(props.id){
                setProviders(await getWatchProviders(props.id));
            }
        };
    
        fetchDetails();
    }, [props.id]);

    return(
        <div>
            <Typography variant='h6' className={style.sectionHead}>Stream</Typography>
            <div className={style.scrollWrap}>
                    { providers && providers?.flatrate && providers?.flatrate?.length > 0 &&
                        providers.flatrate.map((provider) => (
                            <div key={provider.provider_id} className={style.provider}>
                                <img width='100px' height='100px' src={POSTER_BASE_URL + provider.logo_path} alt={provider.provider_name} /> 
                            </div>
                        ))
                    }
                    { providers && !providers.flatrate &&
                        <div className={style.sectionHead}>Not available to stream</div>
                    }
            </div>

            <Typography variant='h6' className={style.sectionHead}>Rent</Typography>
            <div className={style.scrollWrap}>
                    { providers && providers?.rent && providers?.rent?.length > 0 &&
                        providers.rent.map((provider) => (
                            <div key={provider.provider_id} className={style.provider}>
                                <img width='100px' height='100px' src={POSTER_BASE_URL + provider.logo_path} alt={provider.provider_name} /> 
                            </div>
                        ))
                    }
                    { providers && !providers.rent &&
                        <div className={style.sectionHead}>Not available to rent</div>
                    }
            </div>

            <Typography variant='h6' className={style.sectionHead}>Buy</Typography>
            <div className={style.scrollWrap}>
                    { providers && providers?.buy && providers?.buy?.length > 0 &&
                        providers.buy.map((provider) => (
                            <div key={provider.provider_id} className={style.provider}>
                                <img width='100px' height='100px' src={POSTER_BASE_URL + provider.logo_path} alt={provider.provider_name} /> 
                            </div>
                        ))
                    }
                    { providers && !providers.buy &&
                        <div className={style.sectionHead}>Not available to buy</div>
                    }
            </div>
        </div>
    );
}

export default DetailsWhereToWatch;