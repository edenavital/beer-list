import * as Styled from "./BeerList.styles";
import { BeerItem } from "../BeerItem";

export const BeerList = ({ beersList }) => {
  const renderBeerList = () => {
    return beersList.map((item) => {
      const { id, image_url, name, tagline, description, ingredients } = item;
      const formattedIngredient = generateIngredients(ingredients);
      return (
        <BeerItem
          // Assuming the api retrieves unique ids
          key={id}
          image_url={image_url}
          name={name}
          tagline={tagline}
          description={description}
          formattedIngredient={formattedIngredient}
        />
      );
    });
  };

  /**
   * According to the mock - I need to display only the keys of the ingredients.
   * Not the names of each one of the ingredients, I can dive deeper if you want
   *  */
  const generateIngredients = (ingredients) => {
    return ingredients
      ? `Ingredients: ${Object.keys(ingredients).join(", ")}`
      : "";
  };

  return <Styled.BeerListWrapper>{renderBeerList()}</Styled.BeerListWrapper>;
};
