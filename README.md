# VSP Visa Advisor Hub - React Application

This is a React.js conversion of the original HTML/CSS/JS website for VSP Visa Consultant. The application features a modern React architecture with routing, reusable components, and responsive design.

## Features

- **React 18** with modern hooks and functional components
- **React Router v6** for client-side routing
- **Bootstrap 5** for responsive UI components
- **GSAP** for smooth animations and carousel functionality
- **Font Awesome** for icons
- **Responsive Design** that works on all devices
- **Layout Component** with shared header and footer
- **Outlet Routing** for dynamic page content

## Project Structure

```
src/
├── components/
│   ├── Layout.js          # Main layout with header/footer
│   ├── Header.js          # Navigation header component
│   ├── Footer.js          # Footer component
│   ├── Layout.css         # Layout styles
│   ├── Header.css         # Header styles
│   └── Footer.css         # Footer styles
├── pages/
│   ├── Home.js            # Home page with carousel
│   ├── Services.js        # Services page
│   ├── Contact.js         # Contact page with form
│   ├── Company.js         # Company page (placeholder)
│   ├── Testimonials.js    # Testimonials page (placeholder)
│   ├── Blog.js            # Blog page (placeholder)
│   ├── Home.css           # Home page styles
│   ├── Services.css       # Services page styles
│   └── Contact.css        # Contact page styles
├── App.js                 # Main app component with routing
├── App.css                # Global app styles
├── index.js               # Entry point
└── index.css              # Global styles
```

## Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm start
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Key Components

### Layout Component
The `Layout` component serves as the main wrapper that includes:
- **Header**: Navigation with dropdown menus and mobile responsiveness
- **Footer**: Company information and links
- **Outlet**: Renders the current page content based on the route

### Header Component
Features:
- Responsive navigation with Bootstrap
- Mega dropdown menus for Company, Services, and Blog
- Mobile-friendly hamburger menu
- Active page highlighting
- Scroll effects

### Home Page
Features:
- Interactive carousel with GSAP animations
- Service overview cards
- Statistics with scroll animations
- Call-to-action sections

### Services Page
Features:
- Service detail cards with pricing
- Process workflow steps
- Responsive grid layout

### Contact Page
Features:
- Consultation form with validation
- Contact information display
- Responsive form layout

## Routing

The application uses React Router v6 with the following routes:
- `/` - Home page
- `/company` - Company information
- `/services` - Services overview
- `/testimonials` - Client testimonials
- `/blog` - Immigration blog
- `/contact` - Contact form and information

## Styling

- **CSS Variables**: Consistent color scheme and spacing
- **Bootstrap Integration**: Responsive grid and components
- **Custom CSS**: Enhanced styling for specific components
- **Responsive Design**: Mobile-first approach with breakpoints

## Dependencies

- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-router-dom`: ^6.8.1
- `gsap`: ^3.11.4
- `bootstrap`: ^5.3.0
- `@fortawesome/fontawesome-free`: ^6.4.0

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- The carousel functionality has been converted from vanilla JavaScript to React hooks
- GSAP animations are properly integrated with React lifecycle
- All navigation links use React Router's `Link` component
- Form handling uses React state management
- Responsive design maintains the original mobile experience

## Future Enhancements

- Add more interactive features
- Implement form submission handling
- Add content management system
- Enhance accessibility features
- Add more animations and transitions
