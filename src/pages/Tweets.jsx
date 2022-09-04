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
    <div className="flex items-center justify-center">
      <div className="w-1/6">
        {data.map((tweet) => {
          return (
            <div
              className="grid-cols-1 items-center justify-center mt-12"
              key={tweet.author._id}
            >
              <div>
                <h1>@{tweet.author.username}</h1>
                <p>{tweet.text}</p>
              </div>
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tweets;
