import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import Error from "./pages/Error/Error.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Recipe from "./pages/Recipe/Recipe.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
);
