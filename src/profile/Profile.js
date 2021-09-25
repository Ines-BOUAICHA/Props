import React from 'react'
import PropTypes from 'prop-types';
import './profile.css';


const Profile=(props)=> {
    console.log(props);
    
    return (
        <React.Fragment>
            <h1 style={{color:'purple', fontFamily: "Arial", textAlign: 'center', background: "white"}}>{props.titre}</h1>
            {props.data.map((item)=> 
                    <ul style={{color:'black', fontsize: '10px', fontFamily: "Arial", textAlign: 'center', background: 'white'}} key={item.id}>
                        <li><span><b style={{color:'purple'}}>FullName: </b></span>{item.FullName}</li>
                        <li><span><b style={{color:'purple'}}>Bio: </b></span>{item.Bio}</li>
                        <li><span><b style={{color:'purple'}}>Profession: </b></span>{item.Profession}</li>
                    </ul>

            ) } 

            <button style={{color:'purple',  fontFamily: "Arial", textAlign: 'center', background: 'white'}} onClick={props.handle}>ClickMe</button>

            {props.children}



        </React.Fragment>
    )
}
Profile.defaultProps={
    titre:'My Profile'
};

Profile.propTypes={
    titre: PropTypes.string.isRequired
};
export default Profile;