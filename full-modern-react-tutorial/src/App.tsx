import "./App.css";

function App() {
  const title = "Welcome to the new blog!";
  const likes = 50;
  const person = { age: 23, name: "Yoshi" };
  const link = "https://google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Likes {likes} times</p>
        <p>
          age: {person.age}, name: {person.name}
        </p>
        <a href={link}>Google</a>
      </div>
    </div>
  );
}

export default App;
