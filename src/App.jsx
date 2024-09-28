
import { Provider } from 'react-redux';
import Cart from './Components/Cart';
import { store } from './Features/Store';

const App = () => {
    return (
        <div>
            
            <Provider store={store}>
                <Cart />
            </Provider>
        </div>
    );
};

export default App;
