const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		screens: {
  			bigHeight: {
  				raw: '(min-height:618px)'
  			}
  		},
  		keyframes: {
  			cloudSlow: {
  				'0%': {
  					transform: 'translateX(-20%)'
  				},
  				'100%': {
  					transform: 'translateX(300%)'
  				}
  			},
  			cloudFast: {
  				'0%': {
  					transform: 'translateX(-20%)'
  				},
  				'100%': {
  					transform: 'translateX(300%)'
  				}
  			},
  			cloudMedium: {
  				'0%': {
  					transform: 'translateX(-20%)'
  				},
  				'100%': {
  					transform: 'translateX(300%)'
  				}
  			},
  			cloudReverseSlow: {
  				'0%': {
  					transform: 'translateX(300%)'
  				},
  				'100%': {
  					transform: 'translateX(-20%)'
  				}
  			}
  		},
  		animation: {
  			cloudSlow: 'cloudSlow 180s linear infinite',
  			cloudMedium: 'cloudMedium 140s linear infinite',
  			cloudFast: 'cloudFast 100s linear infinite',
  			cloudReverseSlow: 'cloudReverseSlow 200s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
