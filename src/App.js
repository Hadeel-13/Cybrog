import {Header, Footer, Hero} from './sections/index' 
import { Container } from './components/index';
function App() {
  return(
    <>
      <Header />
      <Container>
        <Hero/>
      </Container>
      <Footer />
    </>
  );

}
export default App;