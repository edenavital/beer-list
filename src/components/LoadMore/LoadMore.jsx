import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CircularProgress from "@mui/material/CircularProgress";

import * as Styled from "./LoadMore.styles";
import { Button } from "../Button";
import { Typography } from "../Typography";

export const LoadMore = ({ loadMoreContent, isFetching = true }) => {
  return (
    <Styled.LoadMoreWrapper>
      {isFetching ? (
        <CircularProgress />
      ) : (
        <Button onClick={loadMoreContent}>
          <Styled.LoadMoreContent>
            <Typography>Load More</Typography>
            <KeyboardArrowDownIcon />
          </Styled.LoadMoreContent>
        </Button>
      )}
    </Styled.LoadMoreWrapper>
  );
};
