import React from "react";
import SearchBar from "./SearchBar";
import VideoList from './VideoList';
import youtube from "../apis/youtube";

export default class App extends React.Component {
  state = { videos: [], selectedVideo: null };
  onTermSubmit = async query => {
    const response = await youtube.get("/search", {
      params: {
        q: query
      }
    });
    this.setState({
      videos: response.data.items
    });
  };

  onVideoSelect = (video) =>{
   console.log('From the app', video);
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos}/>
      </div>
    );
  }
}
