import React from 'react';

import {connect} from 'react-redux';

class EventCard extends React.Component {
    state={
        event:{
            name:'',
            location:'',
            dates:'',
            summary:'',
            details:'',
            image:'',
            pricing:''
        }
    }
}