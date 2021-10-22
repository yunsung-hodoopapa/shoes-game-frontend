import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import AppHeader from './components/Header/header';
// import AppCenter from './components/Center/center';
// import AppFooter from './components/Footer/footer';
// import AppHome from './components/Page/Home';
// import AppMypage from './components/Page/Mypage';
// import AppPortfolio from './components/Page/Portfolio';
// import AppFollowing from './components/Page/Following';
// import Sidebar from './components/Sidebar/Sidebar';
// import SidebarItem from './components/Sidebar/SidebarItem';
// import Container from './components/Shared/Container';
import LandingPage from './components/views/LandingPage/LandingPage';
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';
import PublicRoute from './components/AccessControl/PublicRoute';
import PrivateRoute from './components/AccessControl/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={true} exact path='/' component={LoginPage} />
        <PublicRoute restricted={true} exact path='/register' component={RegisterPage} />
        <PublicRoute restricted={false} exact path="/main" component={LandingPage} />
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
