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
        <p>Ma veille technologique, elle regroupe tous les articles que j'ai trouvé interessants sur twitter.</p>


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
        {this.state.isChargedTimeline ? null:
          <div style={{textAlign:'center'}}>
            <p style={{textAlign:'left', paddingBottom:'15%'}}>Chargement de la timeline twitter</p>
            <Loader
              type="Plane"
              color="#00BFFF"
              height="300"
              width="300"
            />
          </div>}

      </div>
    )
  }
}

export default Veille;