# UI Library and Next.js Monorepo

This project is a monorepo containing a reusable React UI component library and a Next.js application that consumes it.

## Project Structure

-   `/`: Root of the monorepo.
    -   `package.json`: Defines the workspace and root scripts.
-   `/ui`: The React UI component library.
    -   Built with Vite, React, TypeScript, and CSS.
    -   Uses Storybook for component development and documentation.
    -   Uses Vitest for testing.
-   `/nx-project`: The Next.js application.
    -   Built with Next.js, React, and TypeScript.
    -   Consumes components from the `/ui` library.
    -   Configured to use Turbopack for development (optional).

## Prerequisites

-   [Node.js](https://nodejs.org/) (LTS version recommended)
-   [npm](https://www.npmjs.com/) (comes with Node.js)

## Setup

1.  **Clone the repository (if applicable).**
2.  **Install dependencies:** Navigate to the root directory of the monorepo in your terminal and run the setup script. This will install dependencies for the root, the UI library, and the Next.js app, and also build the UI library initially.

    ```bash
    npm run setup
    ```

## Development

### Running the UI Library (Storybook)

To develop and view the UI components in isolation using Storybook:

1.  Navigate to the UI library directory:
    ```bash
    cd ui
    ```
2.  Start the Storybook server:
    ```bash
    npm run storybook
    ```
    This will usually open Storybook in your browser at `http://localhost:6006`.

### Running the Next.js Application

To run the Next.js application in development mode:

1.  Navigate to the Next.js project directory:
    ```bash
    cd nx-project
    ```
2.  Start the development server:
    ```bash
    # Using Turbopack (recommended for speed)
    npm run dev
    
    # Or, using Webpack (if experiencing issues with Turbopack)
    # First, remove '--turbopack' from the 'dev' script in nx-project/package.json
    # Then run:
    # npm run dev 
    ```
    This will usually start the app at `http://localhost:3000`.

**Important:** If you make changes to the `/ui` library, you need to rebuild it for the changes to be reflected in the Next.js application. You can rebuild the UI library from the root directory:

```bash
npm run build:ui
```

Then, restart the Next.js development server.

## Testing

### UI Library Tests

The UI library uses [Vitest](https://vitest.dev/) for unit and component testing.

To run the tests:

1.  Navigate to the UI library directory:
    ```bash
    cd ui
    ```
2.  Run the Vitest test runner:
    ```bash
    # Run tests once
    npx vitest run

    # Run tests in watch mode
    npx vitest
    ```

    *(Optional: You can add a script to `ui/package.json` for convenience, e.g., `"test": "vitest run"`, `"test:watch": "vitest"`)*

## Building for Production

### Building the UI Library

To create a production build of the UI library:

1.  Navigate to the UI library directory:
    ```bash
    cd ui
    ```
2.  Run the build command:
    ```bash
    npm run build
    ```
    The output will be in the `/ui/dist` directory.

### Building the Next.js Application

To create a production build of the Next.js application:

1.  Ensure the UI library has been built (`npm run build:ui` from the root).
2.  Navigate to the Next.js project directory:
    ```bash
    cd nx-project
    ```
3.  Run the build command:
    ```bash
    npm run build
    ```
    The output will be in the `/nx-project/.next` directory.

## Technologies Used

-   **Monorepo Management:** npm Workspaces
-   **UI Library (`/ui`):**
    -   React 19
    -   TypeScript
    -   Vite (build tool)
    -   Storybook (component development)
    -   Vitest (testing)
    -   CSS
-   **Next.js App (`/nx-project`):**
    -   Next.js 15
    -   React 19
    -   TypeScript
    -   Turbopack / Webpack
    -   CSS (potentially TailwindCSS if re-added)
