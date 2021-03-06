import React from 'react';
import './ArtistTab.css';
import {Translate} from '../lang/Translate';
import {playerLink} from '../playerLink';
import ArtistTabAlbum from './ArtistTabAlbum';
import {fetchArtist, fetchAlbumsByArtist, fetchTracksByArtist, checkFavorites} from '../../calls.js';

class ArtistTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			artist: {},
			albums: [],
			tracks: [],
			favorites: []
		};
		this.checkFavorites = this.checkFavorites.bind(this);
	}
	componentWillMount(){
		fetchArtist(this.props.match.params._id)
		.then(artist => this.setState({artist}));
		fetchAlbumsByArtist(this.props.match.params._id)
		.then(albums => albums.sort((a, b)=> a.year > b.year ? -1 : 1))
		.then(albums => this.setState({albums}));
		fetchTracksByArtist(this.props.match.params._id)
		.then(tracks => this.setState({tracks}, this.checkFavorites));
	}
	checkFavorites(){
		return checkFavorites(this.state.tracks.map(t => t._id).join(','))
				.then( favorites => this.setState({favorites}));
	}
	renderAlbums(){
		return this.state.albums ? this.state.albums.map( album => <ArtistTabAlbum key={album._id} album={album} tracks={this.state.tracks.filter(t => t.album._id === album._id)} 																				favorites={this.state.favorites}/>) 
			: false;
	}
	render() {
		return (
				<div className="tab artist_tab">
					<div className="banner">
						<div className="details_container">
							<div className="name">
								{this.state.artist.name}
							</div>
							<div className="play" onClick={() => playerLink.playTracks(this.state.tracks)}>
								<Translate word='PLAY'/>
							</div>
						</div>
					</div>
					<div className="sub_banner">
						{this.state.albums ? this.state.albums.length : 0} <Translate word='ALBUMS_INDEXED'/>
					</div>
					<div className="albums">
						{this.renderAlbums()}
					</div>
				</div>
			);
	}
}

export default ArtistTab;