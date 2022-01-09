// import React from 'react';
// import { Switch, Route, withRouter } from 'react-router';
// import { BrowserRouter } from 'react-router-dom';
// import styled from 'styled-components';
// import Footer from '../../Layout/Footer/Footer';
// import Header from '../../Layout/Header/Header';
// import Sidebar from '../../Layout/Sidebar/Sidebar';
// import MyPage from '../Menus/MyPage/MyPage';
// import LandingPage from '../Menus/LadingPage';
// import Following from '../Menus/FollowingPage/Following';
// import Portfolio from '../Menus/PortfolioPage/Portfolio';

// const Center = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   width: 100%;
//   height: 46.5em;
//   left: 0px;
//   top: 142px;
//   background-color: #fafdf3;
// `;

// function MainPage(props) {
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Center>
//           <Sidebar />
//           <Switch>
//             <Route exact path="/" component={LandingPage} />
//             <Route path="/menu/my_page" component={MyPage} />
//             <Route path="/menu/portfolio" component={Portfolio} />
//             <Route path="/menu/following" component={Following} />
//           </Switch>
//         </Center>
//         <Footer />
//       </BrowserRouter>
//     </>
//   );
// }

// export default withRouter(MainPage);
