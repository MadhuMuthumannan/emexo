import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nested from './nested';
import { ThemeContextProvider } from './themeContext';
import Nav from '../Nav';
import DisplayCount from '../children/displayCount';
import DisplaySum from '../children/displaySum';
import ListUsers from '../children/listUsers';
import ListNames from '../children/listNames';
import UserDetail from '../children/userDetail';
import Axios from '../children/axios';
import CounterReducer from '../counterReducer';
import ParentComponent from '../hooks/ParentComponent';
import Counter from '../hooks/Counter';
import HookTimer from '../hooks/HookTimer';
import FocusInput from '../hooks/FocusInput';

export default function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<DisplayCount />} />
        <Route path="/displayCount" element={<DisplayCount />} />
        <Route path="/listUsers" element={<ListUsers />} />
        <Route path="/listNames" element={<ListNames />} />
        <Route path="/displaySum" element={<DisplaySum />} />
        <Route path="/listUsers/userDetail/:userId" element={<UserDetail />} />
        <Route path="/axios" element={<Axios />} />
        <Route path="/hooks" element={<ParentComponent />} />
        <Route path="/hookCounter" element={<Counter />} />
        <Route path="/hookTimer" element={<HookTimer />} />
        <Route path="/focusInput" element={<FocusInput />} />
        <Route
          path="/nested"
          element={
            <ThemeContextProvider>
              <Nested />
            </ThemeContextProvider>
          }
        />
        <Route path="/counter" element={<CounterReducer />} />
      </Routes>
    </BrowserRouter>
  );
}
