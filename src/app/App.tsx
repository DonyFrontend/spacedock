import ErrorBoundary from "./providers/error/ErrorBoundary";
import { RoutesComponent } from "./providers/routes/Routes";

const App = () => {
  return (
    <ErrorBoundary>
      <RoutesComponent />
    </ErrorBoundary>
  );
};

export default App;
