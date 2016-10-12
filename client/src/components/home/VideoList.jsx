import React from 'react';
import Video from './Video';
import YouTube from 'react-youtube';
import VideoActions from './VideoActions';
import { Link } from 'react-router';
import UserPic from './UserPic';

export default class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log('VideoList loaded')
  }

  render() {
    const opts = {
      height: '200',
      width: '400'
    }

    return (
      <div className="videolist-columns">
        { this.props.locale === 'state' ?
          <h1 className="home-header topLocal revision">Top Records In {localStorage.region}</h1>
          :
          <h1 className="home-header topGlobal revision">Top Records Worldwide</h1>
        }
        <div className="videoList-flexRow revision">
        { this.props.videos.map((val,i)=>{
          console.log('videolistval', val)
          val.User = val.User || {username: 'Anonymous'}

          let path = `/record?rid=${ val.RecordId }`
          return (
            <div className="videoList-flexRow-child revision" key={i}>
                <Link className="" to={ path }>
                <div className="videoList-child-thumbnail" style={{ backgroundImage: 'url(http://img.youtube.com/vi/' + val.link + '/hqdefault.jpg)'}}></div>
                </Link>
                <div className="">
                  <span className="videoList-child-title">
                  {val.title.length > 60 ? val.title.slice(0,60) + '...' : val.title}
                  </span>
                  <div className="videolist-userFlex">
                    <UserPic user={val.UserId} username={val.User.username}/>
                    <span className="videoList-userFlex">&nbsp;in&nbsp;<strong>{val.Record.category}</strong></span>
                  </div>
                </div>
            </div>
          )
        })}
        </div>
      </div>
    )
  }
}