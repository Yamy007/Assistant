import  { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import {Loading} from "./components/loading/Loading"
import {Auth} from "./pages/auth/Auth"
import {TaskPage} from "./pages/TaskPage"
import {TaskDetails} from "./pages/TaskDetails"
import {Login} from "./pages/auth/Login"
import {Registration} from "./pages/auth/Registration"
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const MainLayouts = lazy(() => delay(1000).then(() => import("./layouts/MainLayouts").then((module) => ({ default: module.MainLayouts }))));
const HomePage = lazy(() =>   delay(200).then(() =>  import("./pages/HomePage").then((module) => ({ default: module.HomePage }))));
const StaticPage = lazy(() =>   delay(200).then(() =>  import("./pages/StaticPage").then((module) => ({ default: module.StaticPage }))));
const ChartPage = lazy(() =>   delay(200).then(() =>  import("./pages/ChartPage").then((module) => ({ default: module.ChartPage }))));
const NotesPage = lazy(() =>   delay(200).then(() =>  import("./pages/NotesPage").then((module) => ({ default: module.NotesPage }))));
const NotebookPage = lazy(() =>   delay(200).then(() =>  import("./pages/NotebookPage").then((module) => ({ default: module.NotebookPage }))));

export const router = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={<Loading />}>
        <MainLayouts />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
            <HomePage />
        ),
      },
      {
        path: "/static",
        element: (
            <StaticPage />
        ),
      },
      {
        path: "/chart",
        element: (
            <ChartPage />
        ),
      },
      {
        path: "/notes",
        element: (
            <NotesPage />
        ),
      },
      {
        path: "/notebook",
        element: (
            <NotebookPage />
        ),
      },
      {
        path: "/task",
        element: (
            <TaskPage />
        ),
      },
      {
        path: "/taskDetails",
        element: (
            <TaskDetails />
        ),
      },
    ],
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Registration />,
  },


]);
