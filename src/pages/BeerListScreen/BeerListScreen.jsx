import { useState, useEffect } from "react";
import * as Styled from "./BeerListScreen.styles";
import { httpClient } from "../../api";
import { API_LIMIT, ERROR_MESSAGE } from "../../utils";
import { LoadMore } from "../../components/LoadMore";
import { BeerList } from "../../components/BeerList";
import { Typography } from "../../components/Typography";

export const BeerListScreen = () => {
  const [beersList, setBeersList] = useState(null);
  const [offset, setOffest] = useState(1);
  const [isFetching, setIsFetching] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const renderErrorMessage = () => (
    <Styled.ErrorWrapper>
      <Typography fontSize={18}>{errorMessage}</Typography>
    </Styled.ErrorWrapper>
  );

  const loadMoreContent = () => {
    setOffest(offset + 1);
  };

  useEffect(() => {
    /**
     * Using pagination instead of refetching all of the content from scratch every time we load new content.
     * This way the requests are efficient (fetching 10 items in each GET request, instead of fetching (offset * limit) every time)
     */
    const fetchBeers = async () => {
      try {
        setIsFetching(true);
        const query = `?page=${offset}&per_page=${API_LIMIT}`;
        const { data: beers = [] } = await httpClient.get(query);

        const updatedBeersList = beersList ? beersList.concat(beers) : beers;

        setBeersList(updatedBeersList);
      } catch (err) {
        setErrorMessage(err?.message ?? ERROR_MESSAGE);
      } finally {
        setIsFetching(false);
      }
    };

    fetchBeers();
  }, [offset]);

  return (
    <Styled.BeerListScreenWrapper>
      <Styled.BeerListTitle fontSize={22}>Beers</Styled.BeerListTitle>
      {errorMessage
        ? renderErrorMessage()
        : beersList && <BeerList beersList={beersList} />}
      {!errorMessage && (
        <LoadMore loadMoreContent={loadMoreContent} isFetching={isFetching} />
      )}
    </Styled.BeerListScreenWrapper>
  );
};
