import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MainPage from './components/views/MainPage/MainPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import PublicRoute from './components/AccessControl/PublicRoute';
import PrivateRoute from './components/AccessControl/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute restricted={true} exact path='/' component={MainPage} />
        <PublicRoute restricted={true} path='/register' component={RegisterPage} />
        <PublicRoute restricted={false} path="/login" component={LoginPage} />
      </Switch>
    </Router>
  );
}

export default App;

// export default function App() {
//   return (
//     <div className="App">
//       <BrowserRouter>
//         <AppHeader />
//         <Container>
//           <Sidebar />
//           <Switch>
//             <Route exact path="/" component={LandingPage} />
//             <Route path="/my_page" component={AppMypage} />
//             <Route path="/portfolio" component={AppPortfolio} />
//             <Route path="/following" component={AppFollowing} />
//           </Switch>
//         </Container>
//         <AppFooter />
//       </BrowserRouter>
//     </div>
//   );
// }
