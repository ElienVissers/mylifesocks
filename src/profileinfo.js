import React from 'react';

import {BioEditor} from './bioeditor';

export function ProfileInfo(props) {
    return (
        <div className="profileinfo">
            <h1>{props.first} {props.last}</h1>
            <BioEditor
                bio={props.bio}
                updateBio={props.updateBio}/>
        </div>
    );
}

//optional: add FavSocks component here :) (and/or maybe FavColor?)
