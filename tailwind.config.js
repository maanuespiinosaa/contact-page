/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'button': '#4036A9',
                'form': '#111729',
                'inputText': '#CDD5E0',
                'inputBg': '#F8FAFC',
                'white': '#FFFFFF'
            },
            fontFamily: {
                'vietnam': ['Be Vietnam Pro', 'sans-serif'],
            },
            fontWeight: {
                'semibold': 600,
                'bold': 700
            },
        },
    },
    plugins: [],
}