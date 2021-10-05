import { Route, Switch } from "react-router-dom";
import {
  URL_CONVERSATION,
  URL_CONVERSATIONS,
  URL_CREATE_CONVERSATION_ADD_TITLE,
  URL_CREATE_CONVERSATION_SELECT_USER,
  URL_HOME,
} from "./constants/navigations";
import HomeContainer from "./pages/HomeContainer";
import ConversationsContainer from "./pages/ConversationsContainer";
import ConversationContainer from "./pages/ConversationContainer";
import CreateConversationSelectUser from "./pages/CreateConversationSelectUser";
import CreateConversationAddTitle from "./pages/CreateConversationAddTitle";

const Routes = () => {
  return (
    <Switch>
      <Route component={HomeContainer} path={URL_HOME} exact />
      <Route
        component={ConversationsContainer}
        path={URL_CONVERSATIONS}
        exact
      />
      <Route
        component={CreateConversationSelectUser}
        path={URL_CREATE_CONVERSATION_SELECT_USER}
        exact
      />
      <Route
        component={CreateConversationAddTitle}
        path={URL_CREATE_CONVERSATION_ADD_TITLE}
        exact
      />
      <Route
        component={ConversationContainer}
        path={`${URL_CONVERSATION}/:conversation_id`}
        exact
      />
    </Switch>
  );
};

export default Routes;
