import React, { useEffect, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getUser } from "./actions";
import { ErrorBoundary, Loader } from "../components";
import { PageNotFound } from "../container/components";
import { selectUser } from "./selectors";
import "../antd.dark.css";
import "../styles.css";

const AppContainer = ({ user, getUser }) => {
  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, []);

  const LayoutContainer = lazy(() =>
    import("../components/layout/LayoutContainer")
  );

  const AnimatedRoute = lazy(() =>
    import("../container/components/Animation/AnimateRoute")
  );
  const PublicRoute = lazy(() => import("./components/PublicRoute"));
  const ProtectedRoute = lazy(() => import("./components/ProtectedRoute"));
  const GuestRoute = lazy(() => import("./components/GuestRoute"));

  const Home = lazy(() => import("./public/home/Home"));
  const Explore = lazy(() => import("./public/post/explore/Explore"));
  const PostView = lazy(() => import("./public/post/view/View"));
  const About = lazy(() => import("./public/about/About"));
  const Contact = lazy(() => import("./public/contact/Contact"));
  const PrivacyPolicy = lazy(() =>
    import("./public/privacy-policy/PrivacyPolicy")
  );
  const TermsConditions = lazy(() =>
    import("./public/terms-and-conditions/TermsConditions")
  );

  const FAQ = lazy(() => import("./public/faq/FAQ"));

  const Login = lazy(() => import("./guest/login/Login"));
  const Post = lazy(() => import("./protected/post/index"));
  const Profile = lazy(() => import("./protected/profile/Profile"));

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loader />}>
        <LayoutContainer>
          <AnimatedRoute>
            <PublicRoute container={Home} path="/" />
            <PublicRoute container={Explore} path="/explore" />
            <PublicRoute container={PostView} path="/view-post/:id" />
            <PublicRoute container={About} path="/aboutus" />
            <PublicRoute container={Contact} path="/contactus" />
            <PublicRoute container={PrivacyPolicy} path="/privacy-policy" />
            <PublicRoute
              container={TermsConditions}
              path="/terms-and-conditions"
            />
            <PublicRoute container={FAQ} path="/faq" />

            <ProtectedRoute container={Profile} path="/profile" />
            <ProtectedRoute container={Post} path="/post/*" />
            <GuestRoute container={Login} path="/login" />
            <PublicRoute container={PageNotFound} path="*" />
          </AnimatedRoute>
        </LayoutContainer>
      </Suspense>
    </ErrorBoundary>
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

const mapDispatchToProps = {
  getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
