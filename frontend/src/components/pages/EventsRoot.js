import { Outlet, useNavigation } from "react-router-dom";
import EventsNavigation from "../EventsNavigation";
function EventsRootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <EventsNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
}
export default EventsRootLayout;
