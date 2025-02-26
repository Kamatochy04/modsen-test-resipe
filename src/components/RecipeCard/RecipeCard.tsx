import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeartIcon } from '@/assets/icon/HeartIcon';
import { MarkIcon } from '@/assets/icon/MarkIcon';
import { useRecipe } from '@/hooks/useRecipe';
import { RecipeItem } from '@/types/recipeItem';

import { ItemFooter, ItemImage, ItemLabel, ListItem } from '.';

type RecipeCardProps = {
    deleteFromCocked?: () => void;
    recipe: RecipeItem;
    deleteFromCooked?: () => void;
};

const RecipeCard: FC<RecipeCardProps> = ({ recipe, deleteFromCooked }) => {
    const { toggleRecipe } = useRecipe();
    const navigate = useNavigate();

    const handleIconClick = (e: React.MouseEvent, key: string) => {
        e.stopPropagation();
        if (deleteFromCooked) {
            deleteFromCooked();
        } else {
            toggleRecipe(key, recipe);
        }
    };

    const handleCardClick = () => {
        navigate(`/recipe/${recipe.id}`);
    };

    return (
        <ListItem key={recipe.id} onClick={handleCardClick}>
            <ItemImage src={recipe.image} />
            <ItemLabel>{recipe.label}</ItemLabel>
            <ItemFooter>
                <HeartIcon onClick={(e: React.MouseEvent) => handleIconClick(e, 'favorite')} />
                <MarkIcon onClick={(e: React.MouseEvent) => handleIconClick(e, 'cooked')} />
            </ItemFooter>
        </ListItem>
    );
};

export default RecipeCard;
