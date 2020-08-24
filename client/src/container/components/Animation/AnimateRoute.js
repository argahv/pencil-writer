import React from "react";
import posed, { PoseGroup } from "react-pose";
import { Router, Location } from "@reach/router";

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 100 },
  exit: { opacity: 0 },
});

const AnimatedRoute = ({ children }) => {
  return (
    <Location>
      {({ location }) => {
        return (
          <PoseGroup>
            <RouteContainer key={location.key}>
              <Router location={location}>{children}</Router>
            </RouteContainer>
          </PoseGroup>
        );
      }}
    </Location>
  );
};

export default AnimatedRoute;
