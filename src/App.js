import { useEffect, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Blog
        title="This is My First Titile"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni libero
        itaque quam obcaecati ratione laboriosam alias harum ex delectus hic
        esse repellendus incidunt, commodi magnam quisquam, eum minima molestiae
        iste?"
      ></Blog>
      <LoadUsers></LoadUsers>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () =>
    count <= 90 ? setCount(count + 10) : alert("Battery Full");
  const handleDecrease = () =>
    count >= 10 ? setCount(count - 10) : alert("Battery Low");
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleIncrease}>Increase(+)</button>
      <button onClick={handleDecrease}>Decrease(-)</button>
    </div>
  );
}

function Blog(props) {
  const heading = {
    color: "white",
    fontSize: "40px",
    backgroundColor: "red",
    padding: "10px",
    borderRadius: "10px",
  };
  return (
    <article className="blog">
      <h2 style={heading}>{props.title}</h2>
      <p>{props.description}</p>
    </article>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Load Users : {users.length}</h1>
      <div className="users">
        {users.map(user => <Users name = {user.name} username = {user.username} email = {user.email} city = {user.address.city} phone = {user.phone}></Users>)}
      </div>
    </div>
  );
}
function Users(proms) {
  return (
    <div className="userinfo">
      <h3>Name : {proms.name}</h3>
      <h5>UserName : {proms.username}</h5>
      <h5>Email : {proms.email}</h5>
      <h5>City : {proms.city}</h5>
      <h5>Phone : {proms.phone}</h5>
    </div>
  );
}
export default App;
