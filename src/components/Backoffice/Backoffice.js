// imports from react.
import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch, useHistory } from 'react-router-dom';

// imports screens files.
import ScreenEditOrganization from '../../screens/ScreenBackoffice/ScreenEditOrganization/ScreenEditOrganization';
import ContactsScreenBackoffice from '../../screens/ScreenBackoffice/ContactsScreen/ContactsScreen';
import TestimoniesScreen from "../../screens/ScreenBackoffice/ScreenTestimonies/TestimoniesScreen";
import ScreenCategories from '../../screens/ScreenBackoffice/ScreenCategories/ScreenCategories';
import ActivitiesListScreen from '../../screens/ScreenBackoffice/ScreenActivities/ActivitiesScreen';
import ScreenNewsBackoffice from '../../screens/ScreenBackoffice/ScreenNewsBackoffice';
import AdminMenuBackoffice from './MenuBackoffice/AdminMenuBackoffice';
import UsersScreen from '../../screens/ScreenBackoffice/UsersScreen/UsersScreen';
import BackofficeUserEdit from './BackofficeUserList/BackofficeUserEdit';
import HomeEditForm from '../FormHomeEdit/HomeEditForm';

// imports forms
import FormNews from '../FormNews/FormNews'
import CategoryForm from '../Backoffice/BackofficeCategory/BackofficeCategoryForm/CategoryForm'
import FormActivitiesComponent from '../FormActivitesComponent/FormActivities'
import FormTestimonials from '../FormTestimonials/formTestimonials'

//import consts.
import { ROLE_ID_ADMIN } from '../../consts/const';
import { ScreenNewsEditBackoffice } from '../../screens/ScreenBackoffice/ScreenNewsEditBackoffiec';

const Backoffice = () => {
  const { roleId } = useSelector(state => state.user);
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  function handleError() {
    history.push("/Error");
  }

if (roleId === ROLE_ID_ADMIN) {
    return (
      <BrowserRouter>
        <AdminMenuBackoffice onClick={() => { handleClick() }} />
        <Switch>
          <Route exact path="/backoffice" component={HomeEditForm} />
          <Route exact path="/backoffice/testimonials" component={TestimoniesScreen} />
          <Route exact path="/backoffice/edit-organization" component={ScreenEditOrganization} />
          <Route exact path='/backoffice/contacts' component={ContactsScreenBackoffice} />
          <Route exact path="/backoffice/activities" component={ActivitiesListScreen} />
          <Route exact path="/backoffice/news" component={ScreenNewsBackoffice} />
          <Route exact path="/backoffice/users" component={UsersScreen} />
          <Route exact path="/backoffice/users/:id" component={BackofficeUserEdit} />
          <Route exact path="/backoffice/categories" component={ScreenCategories} />
          {/* Forms */}
          <Route exact path="/backoffice/news/new-entry" component={FormNews} />
          <Route exact path="/backoffice/category/new-entry" component={CategoryForm} />
          <Route exact path="/backoffice/activities/new-entry" component={FormActivitiesComponent} />
          <Route exact path="/backoffice/activities/edit" component={FormActivitiesComponent} />
          <Route exact path="/backoffice/testimonials/new-entry" component={FormTestimonials}/>
          <Route exact path='/backoffice/news/:id' component={ScreenNewsEditBackoffice} />
        </Switch>
      </BrowserRouter>
    );
  } else {

    handleError()
    return (

      <> </>
    )
  }
}

export default Backoffice;
