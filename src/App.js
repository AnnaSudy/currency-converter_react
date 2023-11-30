import Container from "./Container";
import Form from "./Form";
import Fieldset from "./Fieldset"
import Legend from "./Legend";
import PassAmount from "./PassAmount";
import ChangeCurrency from "./ChangeCurrency";
import Result from "./Result";

function App() {
  return (
    <Container>
      <Form>
        <Fieldset >
          <Legend title="Przelicznik walut" />
          <PassAmount title="Podaj kwotę w PLN - zł:" />
          <ChangeCurrency title="Wybierz walutę:" />
          <Result title="Wynik: " />
        </Fieldset>
      </Form>
    </Container>
  );
}

export default App;
