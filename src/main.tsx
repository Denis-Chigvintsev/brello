import { createRoot } from "react-dom/client";

import { MantineProvider, createTheme } from "@mantine/core";

// ...
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/spotlight/styles.css";
import "@mantine/tiptap/styles.css";

// ...

import "../node_modules/modern-normalize/modern-normalize.css";
import App from "./App.tsx";
import "./inter.font.css";

const theme = createTheme({ fontFamily: "Inter" });

createRoot(document.getElementById("root")!).render(
  <MantineProvider defaultColorScheme="auto" theme={theme} withGlobalClasses>
    <App />
  </MantineProvider>,
);
