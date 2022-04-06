import React from "react";
import NavBar from "./components/NavBar";
import { useRoutes } from "react-router-dom";

// Components
import Home from "./components/Home";
import Search from "./components/Search";
import Form from "./components/Form";
import Info from "./components/Info";
import Menu from "./components/Menu";
import JsonFile from "./components/JsonFile";

const route = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "search",
    element: <Search />,
  },
  {
    path: "form",
    element: <Form />,
  },
  {
    path: "info",
    element: <Info />,
  },
  {
    path: "bonus",
    element: <Menu />,
  },
  {
    path: "jsonfile",
    element: <JsonFile />,
  },
];

function App() {
  const elements = useRoutes(route);
  return (
    <div className="bg-background min-h-screen max-h-ful pb-6">
      <NavBar />
      <div className="flex justify-center mt-6 mb-6">
        <div className="w-11/12 2xl:w-350 min-h-full max-height-full bg-white rounded-lg shadow-lg overflow-hidden">
          {elements}
        </div>
      </div>
    </div>
  );
}

export default App;
