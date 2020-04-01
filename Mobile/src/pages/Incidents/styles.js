import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';
export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingTop: Constants.statusBarHeight +10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    headerText: {
        fontSize: 18,
        color:'#737380',
    },
    headerTextBold:{
        fontWeight:'bold'
    },
    title: {
        fontSize:27,
        marginBottom: 16,
        marginTop: 20,
        color: '#13131a',
        fontWeight: 'bold'
    },
    description: {
        fontSize: 17,
        lineHeight: 24,
        color: '#737380'
    },
    incidentList: {
        marginTop: 30,
    },
    incident: {
        padding: 20,
        borderRadius:8,
        backgroundColor: '#FFF',
        marginBottom: 16,
    },
    incidentProperty: {
        fontSize: 14,
        color:'#41414d',
        fontWeight: 'bold',
    },
    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom:24,
        color: '#737380'
    },
    detailsButton: {
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    detailsButtonText: {
        color:'#e02041',
        fontSize: 15,
        fontWeight:'bold',
    },
});