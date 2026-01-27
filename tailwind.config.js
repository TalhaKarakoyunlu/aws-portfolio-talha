/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'app-bg': 'var(--color-bg)',
                'app-surface': 'var(--color-surface)',
                'app-text': 'var(--color-text)',
                'app-muted': 'var(--color-muted)',
                'app-accent': 'var(--color-accent)',
                'app-border': 'var(--color-border)',
            },
        },
    },
    plugins: [],
}