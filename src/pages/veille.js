import React from 'react';
import { Timeline } from 'react-twitter-widgets'

class Veille extends React.Component {

  render() {
    return (
      <div>
        <p>Ma veille technologique, elle regroupe tous les articles que j'ai trouvé interessant sur twitter.</p>

        <div >
          <Timeline
            dataSource={{
              sourceType: 'profile',
              screenName: 'alexbeauquel'
            }}
            options={{
              username: 'alexbeauquel',
              height: '80vh'
            }}
            onLoad={() => console.log('Timeline is loaded!')}
          />
        </div>
      </div>
    )
  }
}

export default Veille;