const colors = {
    primary: {
        orange: '#FBB03B',
        lightRed: '#EA4C89',
        darkRed: '#D4145A',
        darkGray: '#454F63',
    },
    grey: {
        dark: 'rgba(0, 0, 0, 0.9)',
        default: 'rgba(0, 0, 0, 0.7)',
        light: 'rgba(0, 0, 0, 0.5)',
        ultraLight: 'rgba(0, 0, 0, 0.25)',
    },
    white: 'white',
    shadow: "-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75); box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);"
};

const fonts = {
    regular: `'Montserrat', sans-serif`,
    bold: `'Montserrat Bold', sans-serif`,
    extraLight: `Montserrat-ExtraLight`,
};

const media = {
    media_SM: `@media only screen and (max-width: 400px)`,
    media_MEDIUM: `@media only screen and (max-width: 800px)`,
    media_MD: `@media only screen and (max-width: 880px)`,
};

const transition = {
    easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    duration: '0.4s',
};

const other = {
    breakpoints: {
        xs: '400px',
        s: '600px',
        m: '900px',
        l: '1200px',
    },
    borderRadius: {
        default: '20px',
        round: '100rem',
    },
    transitions: {
        default: {
            duration: transition.duration,
            timing: transition.easeInOutCubic,
            transition: `all ${transition.duration} ${transition.easeInOutCubic}`,
        },
        boom: {
            duration: transition.duration,
            timing: transition.easeOutBack,
            transition: `all ${transition.duration} ${transition.easeOutBack}`,
        },
    },
    shadow: {
        feature: {
            big: {
                default: '0 40px 40px rgba(0, 0, 0, 0.2)',
                hover: '0 50px 50px rgba(0, 0, 0, 0.2)',
            },
            small: {
                default: '0 15px 25px rgba(0, 0, 0, 0.2)',
                hover: '0 40px 45px rgba(0, 0, 0, 0.1)',
            },
        }
    }
}

const theme = {
    colors,
    fonts,
    media,
    other,
}

export default theme;