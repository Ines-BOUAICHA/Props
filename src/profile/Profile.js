import React from 'react'
import PropTypes from 'prop-types';
import './profile.css';


const Profile=(props)=> {
    console.log(props);
    
    return (
        <React.Fragment>
            <h1>{props.titre}</h1>
            {props.data.map((item)=> 
                    <ul key={item.id}>
                        <li><span><b>FullName: </b></span>{item.FullName}</li>
                        <li><span><b>Bio: </b></span>{item.Bio}</li>
                        <li><span><b>Profession: </b></span>{item.Profession}</li>
                    </ul>

            ) } 
            {props.children}
            {props.hand}
            
            
        </React.Fragment>
    )
}
Profile.defaultProps={
    titre:'React Props checkpoint'
};

Profile.propTypes={
    titre: PropTypes.string.isRequired
};
export default Profile;