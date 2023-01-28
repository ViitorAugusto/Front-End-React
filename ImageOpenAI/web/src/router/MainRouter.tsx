import {useRoutes} from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { CreatePost } from '../pages/CreatePost/CreatePost';


export const MainRouter = () => {
    return useRoutes([
        {path: '/', element: <Home />},
        {path: '/create-post', element: <CreatePost />}
    ])
}