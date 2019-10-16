import React from 'react';
import ReactDOM from 'react-dom';
import Track from './Track';
import './index.css';
import Album from "./Album";

ReactDOM.render(
    <Track />,
    document.getElementById('tracks'),
);

ReactDOM.render(
    <Album />,
    document.getElementById('album'),
);