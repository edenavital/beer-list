import { Tooltip } from "../Tooltip";

import * as Styled from "./BeerItem.styles";

// Suppose to wrap the root children with styles
export const BeerItem = ({
  image_url,
  name,
  tagline,
  description,
  formattedIngredient,
}) => {
  return (
    <Styled.BeerItemWrapper>
      <Tooltip title={formattedIngredient}>
        <Styled.ImageWrapper alt={`${name} image`} src={image_url} />
      </Tooltip>
      <Styled.ContentWrapper>
        <Styled.Title>{name}</Styled.Title>
        <Styled.Tagline fontSize={14}>{tagline}</Styled.Tagline>
        <Styled.Description fontSize={14}>{description}</Styled.Description>
      </Styled.ContentWrapper>
    </Styled.BeerItemWrapper>
  );
};
