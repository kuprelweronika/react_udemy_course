import PageContent from "./PageContent";
import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  let title = "An error occured!";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  } else if (error.status === 404) {
    title = "Not found";
    message = "Could not find resource or page.";
  }
  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}
export default Error;
