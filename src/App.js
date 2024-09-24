import "./App.css";

// routes
import AppRouting from "./utils/routing";

// styles
import "./styles/pages-style.css";
import "./styles/components-style.css";
import "./styles/smaller-screen-responsive.css";
import "./styles/mobile-responsive.css";

// fonts
import "./assets/font/GraphikLight.otf";
import "./assets/font/GraphikExtralight.otf";
import "./assets/font/GraphikRegular.otf";

function App() {
  return <AppRouting />;
}

export default App;
