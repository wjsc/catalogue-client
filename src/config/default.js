export const config = {
    cdn_url: process.env.REACT_APP_CDN_URL,
    api_url: process.env.REACT_APP_API,
    trackers:{
        google_analytics: process.env.REACT_APP_GOOGLE_ANALYTICS || "UA-XXXXXXX-1",
        track_play_ms: process.env.REACT_APP_MILISECONDS_PLAY || 30000
    },
    firebase:{
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyBa9gaXmOAt5beEjWVnsZwPCSFu59Ox5pE",
        authDomain: process.env.REACT_APP_AUTH_DOMAIN || "catalogue-ae87f.firebaseapp.com",
        databaseURL: process.env.REACT_APP_DATABASE_URL || "https://catalogue-ae87f.firebaseio.com",
        projectId: process.env.REACT_APP_PROJECT_ID || "catalogue-ae87f",
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET || "catalogue-ae87f.appspot.com",
        messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID || 583170444541
    },
    random_tab: {
        artist_limit: 16,
        album_limit: 16
    },
    artist_tab: {},
    album_tab: {},
    player_tab: {
        history_limit: 20
    },
    favorites_tab: {
        favorites_limit: 30
    },
    search_tab: {}
}
