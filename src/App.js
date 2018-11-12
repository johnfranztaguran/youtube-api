import React, { Component } from 'react';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import _ from 'lodash'

const API_KEY = 'AIzaSyDq-yNX39wAAiq5DBsya_SRsEV_useoyYg'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        }

        this.videoSearch('surfboards')
    }

    videoSearch = term => {
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            this.setState({
                videos,
                selectedVideo: videos[0]
            })
        })
    }
    
    render() { 
        const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)
        return ( 
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    videos={this.state.videos}
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                />
            </div>
         );
    }
}
 
export default App;