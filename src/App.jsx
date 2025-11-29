import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Display from './components/display.jsx'
import Shadcn from "./components/Shadcn.jsx";
import Form from "./components/Form";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <Display/> */}

        {/* <Shadcn /> */}

        <Form/>
      </QueryClientProvider>
    </>
  );
}

export default App;
