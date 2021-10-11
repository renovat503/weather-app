import React, { Component } from 'react';
import france from '../images/france.png';
import user1 from '../images/user1.png';
import '../styles/city-details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import DayCard from '../components/daycard.jsx'

library.add(fab)

class CityDetails extends React.Component {
    render() { 
        return <div>
            <div className="main-container">
            <div className="card mb-3" style={{borderRadius: 20}}>
            <img style={{borderTopRightRadius: 20,borderTopLeftRadius: 20}}src={france} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <div className="card-body-container">
                    <div class="container">
                        <div class="row">
                            
                            <div class="col-4 left-section">
                            <div>
                                <FontAwesomeIcon className = "twitter-icon"icon={['fab', 'twitter']} />
                                <span className="twitter-feed">Twitter Feed</span>
                                <span className="france">#France</span>
                            </div>
                            <div className="feed-container">
                                <img className="profile-pic"src={user1}/>
                                <div className="name-text-container">
                                        <div>
                                            <span className="tweet-name">Jane Smith </span>
                                            <img className="twitter-verified-icon"src="https://img.icons8.com/fluency/48/000000/verified-badge.png"/>
                                            <span className="tweet-username">@janesmith</span>
                                        </div>
                                        <div className="tweet-text-container">
                                            <h6 className="tweet-text">Don't forget your sunscreen tomorrow,Amazing weather in paris!</h6>
                                        </div>
                                </div>
                                
                            </div>
                            <div className="feed-container">
                                <img className="profile-pic"src={user1}/>
                                <div className="name-text-container">
                                        <div>
                                            <span className="tweet-name">Jane Smith </span>
                                            <img className="twitter-verified-icon"src="https://img.icons8.com/fluency/48/000000/verified-badge.png"/>
                                            <span className="tweet-username">@janesmith</span>
                                        </div>
                                        <div className="tweet-text-container">
                                            <h6 className="tweet-text">Don't forget your sunscreen tomorrow,Amazing weather in paris!</h6>
                                        </div>
                                </div>
                                
                            </div>
                            </div>
                            <div class="col">
                                <div className="days-section">
                                    <DayCard/>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    }
}
 
export default CityDetails;