import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const EmailConfiguration = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Confirm your email address
            </Text>
            <Text style={styles.subText}>
                A confirmation email has been sent to your email address.
                Please follow the instructions in the email to complete your registration.
            </Text>
            <Button
                title="Confirm your email"
                style={styles.confirmButton}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display:"flex",
        flexDirection:"column",
        height:"100vh",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subText: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 20,
    },
    confirmButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#1da1f2',
        borderRadius: 5,
    },
});


export default EmailConfiguration;