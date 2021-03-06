import React from 'react';
import './RandomTab.css';
import {config} from '../../config/default.js';
import {Translate} from '../lang/Translate';
import RandomTabArtist from './RandomTabArtist';
import RandomTabAlbum from './RandomTabAlbum';
import {fetchPaginatedArtists, fetchPaginatedAlbums} from '../../calls';

class RandomTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artists:[],
			albums:[]
		};
	}
	componentWillMount(){
		fetchPaginatedArtists(0, config.random_tab.artist_limit)
		.then( artists => this.setState({
			artists
		}));
		fetchPaginatedAlbums(0, config.random_tab.album_limit)
		.then( albums => this.setState({
			albums
		}))
	}
	renderArtists(){
		return this.state.artists.map((artist)=><RandomTabArtist key={artist._id} artist={artist}/>)
	}
	renderAlbums(){
		return this.state.albums.map((album)=><RandomTabAlbum key={album._id} album={album}/>)	
	}
	render() {
		return (
				<div className="tab random_tab">
					<div className="title"></div>
					<div className="albums">
						<div className="title"><Translate word='ALBUMS'/></div>
						<div className="results">
							{this.renderAlbums()}
						</div>
					</div>
					<div className="artists">
						<div className="title"><Translate word='ARTISTS'/></div>
						<div className="results">
							{this.renderArtists()}
						</div>
					</div>
				</div>
			);
	}
}

export default RandomTab;