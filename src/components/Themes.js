import { createTheme } from "@nextui-org/react"

export const darkTheme = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors
            primaryLight: '$purple200',
            primaryLightHover: '$purple300',
            primaryLightActive: '$purple400',
            primaryLightContrast: '$purple600',
            primary: '$purple600',
            primaryBorder: '$purple500',
            primaryBorderHover: '$purple600',
            primarySolidHover: '$purple700',
            primarySolidContrast: '$white',
            primaryShadow: '$purple500',

            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#5E1DAD',

            // you can also create your own color
            myColor: '#201925'

            // ...  more colors
        },
        space: {},
        fonts: {
            sans: "Bayon, Arial, Roboto, 'Segoe UI'"
        },
        letterSpacings: {
            tighter: '0.3px',
            normal: '0.3px',
        },
    }
})
export const lightTheme = createTheme({
    type: 'light',
    theme: {
        colors: {
            // brand colors
            primaryLight: '$purple200',
            primaryLightHover: '$purple300',
            primaryLightActive: '$purple400',
            primaryLightContrast: '$purple600',
            primary: '$purple600',
            primaryBorder: '$purple500',
            primaryBorderHover: '$purple600',
            primarySolidHover: '$purple700',
            primarySolidContrast: '$white',
            primaryShadow: '$purple500',

            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#5E1DAD',

            // you can also create your own color
            myColor: '#201925'

            // ...  more colors
        },
        fonts: {
            sans: "Bayon, Arial, Roboto, 'Segoe UI'"
        },
        letterSpacings: {
            tighter: '0.3px',
            normal: '0.3px',
        },
    }
})