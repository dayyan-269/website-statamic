/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './resources/**/*.antlers.html',
        './resources/**/*.antlers.php',
        './resources/**/*.blade.php',
        './resources/**/*.vue',
        './content/**/*.md',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Lato', 'Open Sans'],
            },
            colors: {
                primary: '#2c145e',
                light: '#6b21a8',
                secondary: '#6b5a8e',
                background: '#f5f3ff',
                warning: '#facc15',
                dark: '#2d2d2d'
            }
        },
    },

    plugins: [
        require('@tailwindcss/typography'),
    ],
};
