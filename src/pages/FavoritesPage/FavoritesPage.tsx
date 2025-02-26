import { useEffect, useState } from 'react';

import { EmptyIcon } from '@/assets/icon/EmptyIcon';
import { ResipeCard } from '@/components';
import { RecipeItem } from '@/types/recipeItem';
import { getItemFromLocalStorage, setItemToLocalStorage } from '@/utils/LocalStorag';

import { FlexWrapper, ListContainer, Title, Typography, Wrapper } from '.';

const FavoriteRecipes = () => {
    const [favorite, setFavorite] = useState([]);
    const [coocked, setCoocked] = useState([]);

    useEffect(() => {
        const fav = getItemFromLocalStorage('vaforite');
        const cookckedItems = getItemFromLocalStorage('coocked');

        setFavorite(fav || []);
        setCoocked(cookckedItems || []);
    }, []);

    const deleteVaforiteItem = (id: string) => {
        setFavorite((prev) => {
            const updatedFavorites = prev.filter((item: RecipeItem) => item.id !== id);
            setItemToLocalStorage('vaforite', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    const deleteCoockedItem = (id: string) => {
        setCoocked((prev) => {
            const updatedFavorites = prev.filter((item: RecipeItem) => item.id !== id);
            setItemToLocalStorage('coocked', JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };

    return (
        <Wrapper>
            <div>
                <Title>Favorites dishes</Title>

                <FlexWrapper>
                    {favorite.length === 0 ? (
                        <>
                            <Typography>Empty</Typography>
                            <EmptyIcon />
                        </>
                    ) : (
                        <ListContainer>
                            {favorite.map((item: RecipeItem, id) => (
                                <ResipeCard
                                    key={id}
                                    recipe={item}
                                    deleteFromCocked={() => deleteVaforiteItem(item.id)}
                                />
                            ))}
                        </ListContainer>
                    )}
                </FlexWrapper>
            </div>

            <div>
                <Title>Cooked dishes</Title>
                <FlexWrapper>
                    {coocked.length === 0 ? (
                        <>
                            <Typography>Empty</Typography>
                            <EmptyIcon />
                        </>
                    ) : (
                        <ListContainer>
                            {coocked.map((item: RecipeItem, id) => (
                                <ResipeCard
                                    key={id}
                                    recipe={item}
                                    deleteFromCocked={() => deleteCoockedItem(item.id)}
                                />
                            ))}
                        </ListContainer>
                    )}
                </FlexWrapper>
            </div>
        </Wrapper>
    );
};

export default FavoriteRecipes;
