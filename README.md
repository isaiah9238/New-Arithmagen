# ArithmaGen: The AI-Powered Surveying & Math Toolkit

Welcome to ArithmaGen, an all-in-one web application designed for surveyors, engineers, and students. Built with Next.js and powered by generative AI, ArithmaGen provides a comprehensive suite of tools for advanced mathematical and surveying calculations.

> **Disclaimer:** ArithmaGen is an educational tool. While every effort is made to ensure mathematical accuracy, results should be verified by a licensed professional before being used for legal or construction purposes.

## System Architecture & Engine Specs

ArithmaGen utilizes a **Hybrid Math-AI Architecture** to balance real-time performance with deep analytical capability.

### 1. The "Fast Path" (Local Engine)
*   **Framework:** Next.js 15 (App Router) & React 19.
*   **Client-Side Math:** Pure TypeScript implementation of COGO, Curve Geometry, and the Shoelace Formula for instantaneous, zero-latency results.
*   **Projections:** `proj4` integration for NAD83 and SPCS 2011 coordinate transformations.
*   **Matrix Algebra:** `mathjs` for rigorous linear algebra used in resection and adjustment routines.

### 2. The "Heavy Path" (AI Engine)
*   **Intelligence:** Google Gemini (3.1 Flash Preview) via **Genkit**.
*   **Flows:** Server-side Genkit flows for complex reasoning tasks including:
    *   Rigorous Least Squares Adjustment.
    *   Symbolic Calculus (Derivatives/Integrals).
    *   Polynomial Factoring and Root Analysis.
    *   Context-aware Tolerance Standard suggestions.

### 3. Visual Rendering Systems
*   **Drafting Canvas:** HTML5 Canvas API optimized for high-density field drafting and sequential coordinate plotting in the "Arithma-Sketch" module.
*   **Analytical SVG:** Dynamic SVG rendering for the "Interactive Labs," allowing for pixel-perfect mathematical function visualization and intersection detection.

### 4. Persistence & Reporting
*   **Backend:** Firebase (Authentication & Firestore) for real-time cloud synchronization of workspaces and project data.
*   **Report Engine:** `jspdf` for automated generation of high-fidelity analytical reports, combining stage snapshots with mathematical telemetry.

## Core Features

- **Horizontal Calculations:** Perform fundamental COGO calculations including Inverse, Sideshot, Intersections, and Loop Closure.
- **Vertical Calculations:** Level Notes reduction and Slope-to-Horizontal conversions.
- **Curve Suite:** Comprehensive tools for Simple, Compound, Vertical, and Spiral curves.
- **Construction Stakeout:** Specialized reports for slope staking, curve layout, and building corners.
- **Interactive Labs:** Visual function visualizers with real-time analytical telemetry and PDF export.

## Build & Deployment Settings

For services like Firebase App Hosting, use the following settings:

- **Project Type:** Next.js
- **Build Command:** `npm run build`
- **Output Directory:** `.next`
- **Start Command:** `npm start`
