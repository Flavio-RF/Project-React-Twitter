import { useEffect, useState } from "react";
import axios from "axios";

function Tweets() {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get(
      "https://ha-react-proyecto-integrador-back-end.vercel.app/tweets"
    );
    setData(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {data.map((tweet) => {
        return (
          <div key={tweet.author._id}>
            <h1>{tweet.author.username}</h1>
            <p>{tweet.text}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default Tweets;
