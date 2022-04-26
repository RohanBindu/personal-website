import { Switch } from "react-router-dom"
import { ThemeProvider } from "styled-components"
import { lightTheme } from "./components/Themes"
import GlobalStyle from "./globalStyle"
import { Route } from "react-router-dom";
import Main from './components/Main';


//Components
import AboutPage from './components/AboutPage';
import Hoop from './components/Hoop';
import Projects from './components/Projects';
import SkillsPage from './components/SkillsPage';
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";


function App() {
  const location = useLocation()
  return <>


    <GlobalStyle />

      <ThemeProvider theme={lightTheme}>
      
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={Main}/>
          <Route exact path="/about" component={AboutPage}/>
          <Route exact path="/hoop" component={Hoop}/>
          <Route exact path="/projects" component={Projects}/>
          <Route exact path="/skills" component={SkillsPage}/>
        </Switch>
      </AnimatePresence>
      
      </ThemeProvider>
    
    </>
    
}

export default App

