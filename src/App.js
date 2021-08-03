// imports from react.
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CSSTransition } from 'react-transition-group';
import { useDispatch } from 'react-redux';

// imports screen files.
import ScreenUserProfile from './screens/ScreenUserProfile/ScreenUserProfile';
import NewsSelected from './components/NewsListPublic/SelectedNew/NewsSelected';
import DetailTestimonial from './components/TestimonialsCards/DetailTestimonial';
import DetailActivity from './components/ActivitiesCards/DetailActivity';
import ActivityScreen from './screens/ActivityScreen/ActivityScreen';
import Backoffice from './components/Backoffice/Backoffice';
import Home from './screens/HomeScreen/Home';

//imports sesion files.
import LoginFormComponent from './components/LoginFormComponent/LoginFormComponent';

import FormRegister from './components/FormRegister/FormRegister';

//import services files.
import { AuthProviderService } from './services/AuthService/AuthService';
import { URL } from "./consts/constRoutes";
import clientAxios from './services/Axios/axios';

// imports from store.
import { saveHomeData } from './store/HomeDataStore/homeStore';
import { login } from './store/UserStore/UserStore';

// imports querys.
import getHomeInfo from './services/Axios/HomeService/getHomeInfo';

// imports styles.
import './index.css';
import { ErrorComponent } from './components/ErrorComponent/ErrorComponent';

const queryClient = new QueryClient();

function App() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const AutomaticLogin = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const userData = await clientAxios.get('/auth/me', { headers: { Authorization: token } });
      dispatch(login(userData.data));
    }
  }

  useEffect(() => {
    async function saveHomeInfo() {
      const info = await getHomeInfo();
      if (info) {
        dispatch(saveHomeData(info));
      }
    }
    AutomaticLogin();
    saveHomeInfo();
    setLoading(false);
  }, []);

  if (loading) {
    return null;
  } else {
    return (
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <AuthProviderService>
            { /* Navegation routes */
              URL.map(({ url, Component }) => (
                <Route exact path={url} key={`key-${url}`}>
                  {({ match }) => (
                    <CSSTransition in={match != null} timeout={3000} classNames="page" unmountOnExit>
                      <div className="page">
                        <Component />
                      </div>
                    </CSSTransition>
                  )}
                </Route>
              ))}

            {/* ONG web routes */}
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/actividades/:id" component={ActivityScreen} /> */}
            <Route exact path="/novedades/:id" component={NewsSelected} />
            <Route exact path="/testimonios/:id" component={DetailTestimonial} />
            <Route exact path="/actividades/:id" component={DetailActivity} />

            {/* Login and register routes.*/}
            <Route exact path="/login" component={LoginFormComponent} />
            <Route exact path="/register" component={FormRegister} />
            <Route exact path="/error" component={ErrorComponent} />


            {/* Avatar menu routes */}
            <Route exact path="/user-profile" component={ScreenUserProfile} />
            <Route path="/backoffice" component={Backoffice} />
          </AuthProviderService>

        </QueryClientProvider>
      </BrowserRouter>
    );
  }
}

export default App;