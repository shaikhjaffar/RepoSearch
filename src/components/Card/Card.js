import React from 'react'
import './Card.css'
export default function Card(props) {
  return (
    <div className="main-container"key={props.data.id}>
        <img src={props.data.owner.avatar_url} alt={props.data.owner.avatar_url} className="user"/>
        <h2 className="userName"> {props.data.name}</h2>
        <h4 className="job-title"> {props.data.full_name} </h4>
        <ul className="social">
        <li className="list-item"><span className="num">{props.data.language}</span><br></br><span>Language</span></li>
            <li className="list-item"><span className="num">{props.data.stargazers_count}</span><br></br><span>Stars</span></li>
            <li className="list-item"><span className="num">{props.data.watchers}</span><br></br><span>Watchers</span></li>
            <li className="list-item"><span className="num">{props.data.score}</span><br></br><span>Score</span></li>

        </ul>

        <p className="description">
        {props.data.description}        </p>
        <div className="buttons">
            <a className="active btn" href={props.data.svn_url} target="_blank"  rel="noreferrer">Go to Repository</a>
        </div>
    </div>
  )
}
