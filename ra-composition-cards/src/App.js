import './App.css';
import Card from "./components/Card/Card";
import CardTitle from "./components/Card/CardTitle/CardTitle";
import CardText from "./components/Card/CardText/CardText";
import Button from "./components/Button/Button";

const URL = "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/89c43dde-6bb9-4c1d-8e2c-59c3af5430d6/800x800"

function App() {
  return (
    <div className="container pt-5 d-flex">
      <Card
        imageURL={URL}
        style={{width: '20rem', marginRight: '50px'}}
      >
        <CardTitle>Звёздные войны. Эпизод III: Месть си́тхов</CardTitle>
        <CardText>Война! Республика содрогается под ударами беспощадного повелителя ситхов графа Дуку. Герои сражаются
          под знаменами каждой из сторон. Кольцо зла сомкнулось.
          Дерзкая операция генерала Гривуса увенчалась успехом: ворвавшись в столицу Республики, дроиды захватили
          канцлера Палпатина, главу Галактического сената.</CardText>
        <Button>Узнать больше</Button>
      </Card>
      <Card style={{width: '20rem'}}>
      <CardTitle>Звёздные войны. Эпизод I: Скрытая угроза</CardTitle>
      <CardText>Неспокойные времена настали для Галактической Республики. Налогообложение торговых путей к отдаленным
        солнечным системам стало причиной раздоров.</CardText>
      <Button>Узнать больше</Button>
    </Card>
</div>
);
}

export default App;
