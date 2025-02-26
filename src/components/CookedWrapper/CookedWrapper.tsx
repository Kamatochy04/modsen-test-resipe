import { FC } from 'react';

import { EmptyIcon } from '@/assets/icon/EmptyIcon';
import { RecipeItem } from '@/types/recipeItem';

import { Container, FlexWrapper, Title, Typography } from './index';

type FavoriteRecipesProps = {
    recipts: RecipeItem[];
};
const FavoriteRecipes: FC<FavoriteRecipesProps> = () => {
    return (
        <Container>
            <Title>Favorites dishes</Title>
            <FlexWrapper>
                <Typography>Empty</Typography>
                <EmptyIcon />
            </FlexWrapper>
        </Container>
    );
};

export default FavoriteRecipes;
