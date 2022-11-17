import { createGlobalStyle } from "styled-components";

const defaultImage =
    "https://images.unsplash.com/photo-1444084316824-dc26d6657664?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

export default createGlobalStyle`

    body {
        padding: 0;
        margin: 0;
        font-family: Outfit, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        background: url(${(p) => p.bg || defaultImage});
        transition: background 0.3s ease-in-out;
        color: white;
        background-size: cover;
        background-repeat: no-repeat;
        box-shadow: 0 0 500px rgba(0, 0, 0, 0.5) inset;
        min-height: 100vh;
        padding: 40px;
        width: 100vw;
        overflow: hidden;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    * {
        box-sizing: border-box;
    }

`;
