import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import moment from "moment-timezone";

export default class App extends React.Component {
    static navigationOptions = {
        header: null
    };
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date(),
            // markedDate: moment(new Date()).format("YYYY-MM-DD")

            newYork: moment.tz("2014-06-01 12:00", "America/New_York").format(),
            losAngeles: moment.tz("2014-06-01 12:00", "America/New_York").tz("America/Los_Angeles"),
            london: moment.tz("2014-06-01 12:00", "America/New_York").tz("Europe/London")

        };
    }

    render() {
        // const today = this.state.currentDate;
        // const day = moment(today).format("dddd");
        // const date = moment(today).format("MMMM D, YYYY");

        const newYork  = this.state.newYork;
        const losAngeles = this.state.losAngeles.format();
        const london = this.state.london.format();

        return(
            <View style = { styles.container } >
                <Text>Open up App.js to start working on your app asdasd!</Text>
                <Text>{newYork}</Text>
                <Text>{losAngeles}</Text>
                <Text>{london}</Text>
            </View>
        );
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
