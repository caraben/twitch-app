import React, { Component } from "react";
import "./App.css";
import twitchClientId from "./twitchClientId";
import answer from "./twitchJson.js";
class App extends Component {
  state = {
    data: null,
    isLoading: false
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    //    https://api.twitch.tv/kraken/streams?game_id=33214&client_id=i2zmdif3aid5ia3lyyhucvirbefrf2

    const url =
      //"https://api.twitch.tv/kraken/streams?game_id=33214&client_id=" +

      "https://api.twitch.tv/kraken/streams?stream_type=live&language=en&limit=100&client_id=" +
      //"https://api.twitch.tv/kraken/streams/&channel=32381248896,32381238384,32385192704&client_id=" +
      //"https://api.twitch.tv/kraken/streams/&channel=yassuo&client_id=" +
      //"https://api.twitch.tv/kraken/streams/channels/28633177/follows&client_id=" +
      //"https://api.twitch.tv/kraken/channels/32381248896&client_id=" +
      //"https://api.twitch.tv/kraken/streams/14408894&client_id=" +
      twitchClientId;
    fetch(url)
      .then()
      .then(data => data.json())
      .then(data => {
        this.setState({
          data: data.streams
        });
        console.log(this.state.data);
      })
      .catch(e => {
        console.log(e);
        return e;
      });
  };

  render() {
    return (
      <div>
        <p>twitch app fcc</p>
        <ul>
          {this.state.data &&
            this.state.data.map((data, i) => (
              <li key={i} className="channelBox">
                <img
                  src={data.channel.logo}
                  alt="channel_icon"
                  height="30px"
                  width="30px"
                />
                <a
                  href={data.channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="channelName"
                >
                  {data.channel.display_name}
                </a>

                <p className="channelGame">{"- " + data.game}</p>
                <p className="channelViewers"> {"- " + data.viewers}</p>
              </li>
              /* <li key={i}>
                <p>id: {data.follows.user.id}</p>
                <p>bio: {data.follows.user.bio}</p>
                <p>name: {data.follows.user.display_name}</p>
              </li>*/
            ))}
        </ul>
      </div>
    );
  }
}

export default App;
