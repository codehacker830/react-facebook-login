import React, {Component} from 'react';
import FacebookLoginBtn from 'react-facebook-login';

export default class LoginFacebook extends Component {
    state = {
        auth: false,
        name: "",
        imgUrl:"",
        email:""
    }
    componentClicked = () => {
        console.log("facebook login Button clicked");
    }
    responseFacebook = (res) => {
        console.log("facebook auth response: ",res);
        if(res.status !== 'unknown')
            this.setState({auth: true, name: res.name, imgUrl: res.picture.data.url, email: res.email})
    }
    render () {
        let facebookData;
        
        this.state.auth ? 
        facebookData = (
            <div>
                <img src={this.state.imgUrl} alt={this.state.name} />
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
            </div>
        ) : 
        facebookData = (
            <FacebookLoginBtn
                appId="xxxxxxxxxxxxxx"
                autoLoad={false}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook} />
        );

        return(
            <>
                {facebookData}
            </>
        );
    }
}
