import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import CoinDetailsPage from '../components/coins/coindetailspage/CoinDetailsPage';
import CoinsListPage from '../components/coins/coinslistpage/CoinsListPage';
import ErrorComponent from '../components/errorcomponent/ErrorComponent';
import History from '../components/history/History';
import Home from '../components/home/Home'
import Portfolio from '../components/portfolio/Portfolio';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            }
        ],
        errorElement: <ErrorComponent />
    },
    {
        path: "/portfolio",
        element: <App />,
        children: [
            {
                path: "",
                element: <Portfolio />
            }
        ]
    },
    {
        path: "/coins",
        element: <App />,
        children: [
            {
                path: "",
                element: <CoinsListPage />
            },
            {
                path: ":coinId",
                element: <CoinDetailsPage />
            }
        ]
    },
    {
        path: "/history",
        element: <App />,
        children: [
            {
                path: "",
                element: <History />
            }
        ]
    }
])

export default router;