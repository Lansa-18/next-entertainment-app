# **Next Level Entertainment Hub** 🍿

Embark on a seamless entertainment experience with Next Level Entertainment Hub! Built with React and Next.js, this application offers a modern interface to discover trending movies and TV series, manage your bookmarks, and search for your favorites.

## Installation

Get started in just a few steps:

1.  **Clone the Repository:**

    ```bash
    git clone https://github.com/Lansa-18/next-entertainment-app.git
    ```
2.  **Navigate to the Project Directory:**

    ```bash
    cd next-entertainment-app
    ```
3.  **Install Dependencies:**

    ```bash
    npm install
    ```
4.  **Set Up Environment Variables:**

    -   Create a `.env.local` file in the root directory.
    -   Add your TMDB API key, access token, and authentication secrets.  See `.env.local` file in the repository
    ```
    NEXT_PUBLIC_TMDB_API_KEY=YOUR_TMDB_API_KEY
    TMDB_ACCESS_TOKEN=YOUR_TMDB_ACCESS_TOKEN
    NEXTAUTH_SECRET=YOUR_NEXTAUTH_SECRET
    AUTH_GOOGLE_ID=YOUR_AUTH_GOOGLE_ID
    AUTH_GOOGLE_SECRET=YOUR_AUTH_GOOGLE_SECRET
    AUTH_GITHUB_ID=YOUR_AUTH_GITHUB_ID
    AUTH_GITHUB_SECRET=YOUR_AUTH_GITHUB_SECRET
    ```
5.  **Run the Development Server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

1.  **Authentication**:

    -   Sign up or log in using Google or GitHub.
    -   Access protected routes after successful authentication.
2.  **Home Page**:

    -   View trending movies and TV series.
    -   Explore recommended content tailored for you.
3.  **Movies & TV Series Pages**:

    -   Browse popular movies and TV series.
    -   Use the search bar to find specific content.
4.  **Bookmarks Page**:

    -   Save your favorite movies and TV series to your bookmarks.
    -   Easily manage your saved content.

## Features

*   **Authentication**: Secure user authentication using NextAuth.js with Google and GitHub providers.
*   **Trending Content**: Displays trending movies and TV series fetched from the TMDB API.
*   **Search Functionality**: Allows users to search for movies and TV series.
*   **Bookmarks**: Enables users to bookmark their favorite movies and TV series.
*   **Responsive Design**: Provides a seamless user experience across various devices.
*   **Play on Hover**: Provides play button to allow users to play the video of the current movie.

## Technologies Used

| Category         | Technology                                                                               | Description                                                                                                                                                |
| :--------------- | :--------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Framework**    | [Next.js](https://nextjs.org/)                                                          | React framework for building performant web applications with features like server-side rendering and static site generation.                              |
| **UI Library**   | [React](https://react.dev/)                                                             | A JavaScript library for building user interfaces.                                                                                                        |
| **Styling**      | [Tailwind CSS](https://tailwindcss.com/)                                               | A utility-first CSS framework for rapidly designing custom designs.                                                                                       |
| **UI Components** | [Shadcn UI](https://ui.shadcn.com/)                                                     | Re-usable components built using Radix UI primitives and styled with Tailwind CSS.                                                                        |
| **Authentication** | [NextAuth.js](https://next-auth.js.org/)                                                | Complete open source authentication toolkit for Next.js applications.                                                                                   |
| **Data Fetching**  | [TMDB API](https://www.themoviedb.org/documentation/api)                                 | A RESTful API for accessing movie, TV show, and cast information.                                                                                        |
| **State Management** | [React Context API](https://react.dev/learn/passing-data-deeply-with-context) | A feature in react that lets us share states across components.   
| **Form Validation** | [Zod](https://zod.dev/)                                                        | TypeScript-first schema declaration and validation library.                                                                                      |
| **Carousel**       | [Embla Carousel](https://www.embla-carousel.com/react)                                     | A barebones but powerfull library for carousels                                                                                                   |
| **Utility Library**| [lodash](https://lodash.com/)                                                       | A JavaScript utility library.                                                                                                    |
| **Icons**       | [Lucide React](https://lucide.dev/)                                                        | Beautifully simple, pixel-perfect icons.                                                                                                                  |

## Author Info

*   **Lansa**
    *   [LinkedIn](https://www.linkedin.com/in/lancer18)
    *   [GitHub](https://github.com/Lansa-18)
    *   [Twitter](https://x.com/Lansa_18)

## Badges

[![Next.js](https://img.shields.io/badge/Next.js-black?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-blue?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=flat-square&labelColor=000000&logoColor=white)](https://ui.shadcn.com/)
[![Zod](https://img.shields.io/badge/zod-blue?style=flat-square&logo=typescript&labelColor=blue)](https://zod.dev/)
[![lodash](https://img.shields.io/badge/lodash-blueviolet?style=flat-square&labelColor=blueviolet)](https://lodash.com/)

[![Readme was generated by Dokugen](https://img.shields.io/badge/Readme%20was%20generated%20by-Dokugen-brightgreen)](https://www.npmjs.com/package/dokugen)
