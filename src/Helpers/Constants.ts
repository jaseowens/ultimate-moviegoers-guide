import { ReactNode } from 'react';

// App Configuration Constants
export const APP_NAME = 'Ultimate Moviegoers Guide';
export const SIDE_DRAWER_WIDTH = 240;

// Navigation Declarations
export enum NaviationTitles {
    DETAILS = 'Details',
    NOW_PLAYING = 'Now Playing',
    POPULAR = 'Popular',
    TOP_RATED = 'Top Rated',
    SEARCH = 'Search'
}

export enum NaviationPaths {
    DETAILS = '/details',
    NOW_PLAYING = '/',
    POPULAR = '/popular',
    TOP_RATED = '/top-rated',
    SEARCH = '/search'
}

export interface NavigationItems {
    text: NaviationTitles,
    path: NaviationPaths,
    icon: ReactNode
}