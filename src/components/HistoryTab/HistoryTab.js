import React from 'react';
import './HistoryTab.css';
import HistoryTabTrack from './HistoryTabTrack';

class HistoryTab extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			 tracks :[ ]
		};
	}
	renderTracks(){
		return this.state.tracks ? this.state.tracks.map((track)=><HistoryTabTrack key={track} track={track}/>) : false;
	}
	render() {
		return (
				<div className="tab history_tab">
					<div className="banner">
						<div className="details_container">
							<div className="name">
								HistoryTab
							</div>
							<div className="play">
								Play
							</div>
						</div>
					</div>
					<div className="sub_banner">
						{this.state.tracks.length} tracks in History
					</div>
					<div className="tracks">
						{this.renderTracks()}
					</div>
				</div>
			);
	}
}

export default HistoryTab;