import React from 'react';
import { StyleSheet , Text , View , Button } from 'react-native';
import { useLocation , useNavigate } from 'react-router-dom';
import axios from "axios";
import sty from "./active.module.css"
const EmailConfiguration = () => {
    const location = useLocation ();
    const navigate = useNavigate ();
    const { pathname } = location;
    const segments = pathname.split ( '/' );
    const firstSegment = segments[ 2 ];
    const secondSegment = segments[ 3 ];
    const data = {
        uid : segments[ 2 ] ,
        token : segments[ 3 ]
    }
    const activeHandler = () => {
        axios.post ( "https://hive.iran.liara.run/auth/users/activation/" , data )
            .then ( response => {
                navigate ( "/" )
            } )
            .catch ( error => {
                console.log ( error.response.data )
            } )
    }
    return (
        <View style={ styles.container }>
            <Text style={ styles.headerText }>
                Confirm your email address
            </Text>
            <Text style={ styles.subText }>
                A confirmation email has been sent to your email address.
                Please follow the instructions in the email to complete your registration.
            </Text>

            <button className={sty.confirmButton} onClick={activeHandler}>Confirm your email</button>

        </View>
    );
};

const styles = StyleSheet.create ( {
    container : {
        display : "flex" ,
        flexDirection : "column" ,
        height : "100vh" ,
        flex : 1 ,
        justifyContent : 'center' ,
        alignItems : 'center' ,
        backgroundColor : '#f2f2f2' ,
    } ,
    headerText : {
        fontSize : 20 ,
        fontWeight : 'bold' ,
        marginBottom : 20 ,
    } ,
    subText : {
        fontSize : 16 ,
        textAlign : 'center' ,
        marginHorizontal : 20 ,
    } ,
    confirmButton : {
        marginTop : 20 ,
        padding : 10 ,
        backgroundColor : '#1da1f2' ,
        borderRadius : 5 ,
    } ,
} );


export default EmailConfiguration;