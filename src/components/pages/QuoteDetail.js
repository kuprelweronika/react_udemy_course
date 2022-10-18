import { useParams, Route } from "react-router-dom";
import { Fragment, useEffect } from "react";
import Comments from "./../comments/Comments";
import HighlightedQuote from "../quotes/HighlightedQuote";
import { Link } from "react-router-dom";
import useHttp from "./../hooks/use-http";
import { getSingleQuote } from "../lib/api";
import LoadingSpinner from "./../UI/LoadingSpinner";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q1", author: "Maximilian", text: "Learning React is great!" },
];

const QuoteDetail = () => {
  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);
  const params = useParams();

  const { quoteId } = params;

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered">{error}</p>;
  }
  if (!loadedQuote) {
    return <p>No quote found!</p>;
  }
  return (
    <Fragment>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <div className="centered">
        <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
          Load Comments
        </Link>
      </div>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
