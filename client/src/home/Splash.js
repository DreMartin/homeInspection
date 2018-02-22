import React from 'react';
import ReportIndex from '../reports/ReportIndex';

class Splash extends React.Component{

    render(){
        return (
            <div>
                <ReportIndex token={this.props.sessionToken}/>
            </div>
        )
    }
}

export default Splash;