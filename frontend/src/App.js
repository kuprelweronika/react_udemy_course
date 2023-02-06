import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../src/components/pages/HomePage";
import EventsPage, { loader as eventsLoader } from "../src/components/pages/EventsPage";
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction } from "../src/components/pages/EventDetailPage";
import EditEventPage from "../src/components/pages/EditEventPage";
import NewEventPage, { action as newEventAction } from "../src/components/pages/NewEventPage";
import MainNavigation from "../src/components/MainNavigation";
import EventsRootLayout from "./components/pages/EventsRoot";
import Error from "./components/pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainNavigation />,
    errorElement: <Error />,

    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        children: [
          {
            path: "",
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ":eventId",
            id: "event-detail",
            loader: eventDetailLoader,
            children: [
              { index: true, element: <EventDetailPage />, action: deleteEventAction },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage />, action: newEventAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
