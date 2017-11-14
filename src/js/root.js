import React from 'react';
import ReactDOM from 'react-dom';

import Header from "./components/pc_hearder";
//
export default class Root extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
            </div>
        );
    };
}
ReactDOM.render(
    <Header/>, document.getElementById('mainContainer'));
