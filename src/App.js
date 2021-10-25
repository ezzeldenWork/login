import Form from "./Form";
import NavBar from "./NavBar";
import PageContent from "./PageContent";
import {ThemeProveder} from "./contexts/ThemeContext";
import {LanguageProveder} from "./contexts/LangushContext";

const App = () => {
  return (
    <ThemeProveder>
      <LanguageProveder>
        <PageContent>
          <NavBar />
          <Form />
        </PageContent>
      </LanguageProveder>
    </ThemeProveder>
  );
};

export default App;
