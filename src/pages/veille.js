import React from 'react';
import { Timeline } from 'react-twitter-widgets'
import Loader from 'react-loader-spinner'

class Veille extends React.Component {
  constructor(props){
    super(props);

    this.state={
      isChargedTimeline:false,
    }
  }

  render() {

    return (
      <div>
        <p>Ma veille technologique, elle regroupe tous les articles que j'ai trouvé interessant sur twitter.</p>
        {this.state.isChargedTimeline ? null:
          <div >
            <p>Chargement de la timeline twitter</p>
            <Loader
              type="Plane"
              color="#00BFFF"
              height="300"
              width="300"
            />
          </div>}
        <div className={this.state.isChargedTimeline ? '' : 'hide'}>
          <Timeline
            key={'timeline'}
            ref={'timeline'}
            dataSource={{
              sourceType: 'profile',
              screenName: 'alexbeauquel'
            }}
            options={{
              username: 'alexbeauquel',
              height: '80vh'
            }}
            onLoad={() =>
            {
              console.log('Timeline is loaded!');
              if (!this.state.isChargedTimeline) {
              this.setState({
              isChargedTimeline: true,
            })
            }
            }}
          />

        </div>
      </div>
    )
  }
}

export default Veille;