# Next.js OmniUI StarterKit with Mantine, Aceternity, NextUI, MagicUI, Shadcn, PrimeReact, Shoelace, Framer Motion and GSAP

Welcome to the **Next.js StarterKit**, a full-fledged boilerplate integrating multiple UI libraries. This starter kit offers a flexible and efficient development environment for building stunning web applications using:

- [Next.js](https://nextjs.org/)
- [Mantine](https://mantine.dev/)
- [Aceternity UI](https://ui.aceternity.com/)
- [GSAP](https://gsap.com/) 
- [Framer Motion](https://www.framer.com/motion/) 
- [NextUI](https://nextui.org/)
- [MagicUI](https://magicui.design/) 
- [Shadcn UI](https://ui.shadcn.com/) 
- [PrimeReact](https://primereact.org/)
- [Shoelace](https://shoelace.style/)
- [Aelomotion](https://aelomotion.imcrox.com/)

## Deploy Your Own

Deploy this StarterKit using Vercel by clicking the button below:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FByteBigBoss%2FNext.js-MANMSP-Starter-Kit)

Clicking this button will prompt you to deploy the project directly to your own Vercel account. Vercel will handle the entire deployment process, and you will have your application live in no time.

## Features

- **Multi-UI Integration**: Choose from a variety of UI libraries and easily switch between them.
- **Built with TypeScript**: Enjoy type safety and autocompletion for an enhanced developer experience.
- **Pre-configured Routing**: Using the power of Next.js for server-side rendering (SSR), static generation (SSG), and API routes.
- **Component Flexibility**: Extensible and customizable components for building unique interfaces.
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices.
- **CSS-in-JS**: Supports various styling options, including CSS Modules and Styled Components.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git@github.com:ByteBigBoss/Next.js-MANMSP-Starter-Kit.git nextjs-starterkit
   cd nextjs-starterkit
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Run the development server:**

   ```bash
   pnpm dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser to see the application in action.

## Available UI Libraries

### Mantine

Mantine is a full-featured React component library offering a wide range of components and hooks for your Next.js applications. To use Mantine:

- Components are located in the `@mantine/core` directory.
- Visit [Mantine documentation](https://mantine.dev/) for more information.

### Aceternity UI

Aceternity UI offers a unique set of sleek and modern components to craft beautiful interfaces. You'll find:

- Components in `components/ui`.
- Additional customization options are provided through the Aceternity theme.

### NextUI

NextUI delivers performance-optimized components for Next.js. Components are located in `@nextui-org/react`. 

Visit the official [NextUI documentation](https://nextui.org/) to learn more about its usage.

### MagicUI

MagicUI enhances your web application with mystical components and powerful utilities. All MagicUI components can be found in the `components/magicui` folder.

### Shadcn UI

Shadcn is a modern and customizable UI library with a focus on accessibility. You can find Shadcn components in `components/ui`.

### PrimeReact

PrimeReact brings a large collection of rich UI components, covering various needs like tables, form elements, and more. You'll find these components in `primereact`.

Check out [PrimeReact documentation](https://primereact.org/) for full component details.

### Shoelace

Shoelace provides a library of professionally designed, customizable UI components. To get started with Shoelace:

- Components are imported from the `@shoelace-style/shoelace` package.
- Refer to the [Shoelace documentation](https://shoelace.style) for detailed instructions on usage.

### GSAP

GSAP (GreenSock Animation Platform) is a powerful JavaScript library for creating high-performance animations. You can create complex animations and transitions seamlessly within your Next.js application.

- To use GSAP, import components from the gsap package.
- Check out the GSAP documentation for detailed usage and examples.

### Framer Motion

Framer Motion is a popular animation library for React, providing a simple API for creating fluid animations and transitions. It's perfect for enhancing the user experience of your Next.js applications.

- Use components from the framer-motion package.
- Visit the Framer Motion documentation for more information on how to implement animations.

## Usage

### Switching UI Libraries

This StarterKit allows you to easily switch between different UI libraries. Here's how you can switch components:

1. Navigate to the `app/page.tsx` file.
2. Uncomment or replace the import statements based on the UI library you want to use.
3. Update the component in the JSX with the corresponding library component.

```tsx
import { Button } from '@mantine/core' // Example for Mantine
// import { Button } from '@nextui-org/react'  // Example for NextUI
```

### Customizing Components

You can customize any component by navigating to the respective library folder inside the `components/` directory. For example, to customize a `Button` component for Shadcn UI:

```bash
components/ui/button.tsx
```

## Directory Structure

```bash
.
├── components/
│   ├── anim/   
│        ├── aelomotion/ # Aelomotion Animations
│        ├── shoelace/   # Shoelace Animations
│   ├── magicui/         # MagicUI components
│   ├── ui/              # Shadcn UI + Aceternity UI components
├── app/                 # Next.js pages and routing
├── public/              # Static files
├── styles/              # Global and component-specific styles
└── package.json         # Project dependencies and scripts
```

## Contributing

Feel free to submit a pull request if you'd like to contribute or suggest improvements. We welcome contributions of all kinds!

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/new-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/new-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Happy Coding 🚀

![Alt](https://repobeats.axiom.co/api/embed/2f95ef5baade233453a3f06f140af957429b0a35.svg "Repobeats analytics image")
