import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1.25rem',
				sm: '1.75rem',
				lg: '2.5rem',
			},
			screens: {
				'2xl': '1240px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
				serif: ['"Playfair Display"', 'Georgia', 'serif'],
				display: ['"Playfair Display"', 'Georgia', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				cream: {
					50: '#FAF7F0',
					100: '#F4EFE4',
					200: '#EBE3D3',
					300: '#DDD4C2',
					400: '#C9BFA9',
				},
				berry: {
					50: '#FDF2F3',
					100: '#FAE3E5',
					200: '#F3C3C7',
					500: '#C2222E',
					600: '#A61822',
					700: '#8C131C',
					800: '#700F16',
					900: '#530B10',
				},
				oasis: {
					50: '#EFF4F0',
					100: '#DCE7DF',
					200: '#B8CEBF',
					600: '#1D502E',
					700: '#164024',
					800: '#12381E',
					900: '#10321B',
					950: '#0B2413',
				},
				sun: {
					400: '#E5B44B',
					500: '#D19A2E',
					600: '#B27E1B',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 1px)',
				sm: 'calc(var(--radius) - 2px)'
			},
			boxShadow: {
				'soft': '0 2px 16px -4px rgba(16, 50, 27, 0.06)',
				'elevated': '0 14px 36px -12px rgba(16, 50, 27, 0.12)',
				'berry': '0 8px 20px -6px rgba(166, 24, 34, 0.35)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-up': {
					'0%': { opacity: '0', transform: 'translateY(12px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-up': 'fade-up 0.55s cubic-bezier(0.22, 1, 0.36, 1) forwards',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
