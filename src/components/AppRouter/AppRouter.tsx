import { lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { MainLayout } from '@/layout';

import RecipeInfoBlock from '../RecipeInfoBlock/RecipeInfoBlock';

const HomePage = lazy(() => import('@/pages/HomePage/HomePage'));
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage/FavoritesPage'));
const Errorpage = lazy(() => import('@/pages/404/404'));

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="cooked" element={<FavoritesPage />} />
                    <Route path="recipe/:id" element={<RecipeInfoBlock />} />
                    <Route path="*" element={<Errorpage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
