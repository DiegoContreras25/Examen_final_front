import { useSignal } from "@preact/signals";
//import videos from "../islands/videos.tsx";

//https://diegocontre-examen-fina-33.deno.dev/
export default function Home() {
  return (
    <head class=".head">
      <title>front</title>
      <body class=".body">
        <div class=".login-container">
          <h2 class=".h2">Login</h2>
          <form class=".form" method="POST" action="/login">
            <label class=".label" for="email">Email</label>
            <input
              class=".input"
              type="text"
              id="email"
              name="email"
              //required=""
            >
            </input>
            <label class=".label" for="password">Password</label>
            <input
              class=".input"
              type="password"
              id="password"
              name="password"
              //required=""
            >
            </input>
            <button class=".button" type="submit">Login</button>
            <p class="register-link">
              Don't have an account?
              <a href="/register">Register</a>
            </p>
          </form>
        </div>
      </body>
    </head>
  );
}
