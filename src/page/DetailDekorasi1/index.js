import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const DetailDekorasi1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.containerImage}>
                <Image source={require('../../../assets/foto/dekorasi1.jpeg')} style={styles.image} />
            </View>
            <View style={styles.containerText}>
                <Text style={styles.text1}>Dekorasi Klasik</Text>
                <Text style={styles.text}>By Romelan Cipta Pesona</Text>
                <Text style={styles.text}>Rp 4.500.000</Text>
                <Text style={styles.text1}>Deskripsi</Text>
                <Text style={styles.text}>> Dekorasi Pelaminan 7 Meter</Text>
                <Text style={styles.text}>> Lantai Whiteboard</Text>
                <Text style={styles.text}>> Mini Garden</Text>
                <Text style={styles.text}>> Lighting Set</Text>
                <Text style={styles.text}>> Wedding Get</Text>
                <Text style={styles.text}>> Standing Flower</Text>
                <Text style={styles.text}>> 1 Set Meja Akad</Text>
            </View>
            <View style={styles.containerButton}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.text2}>Beli Sekarang</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default DetailDekorasi1

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
    },
    containerImage: {
        width: 300, 
        height: 220, 
        borderRadius: 10, 
        backgroundColor:'#FFBFBF', 
        justifyContent:'center', 
        alignItems:'center', 
        marginTop: 10, 
        marginHorizontal: 30
    },
    image: {
        width: 250, 
        height: 200, 
        borderRadius: 10
    },
    containerText: {
        marginLeft: 55
    },
    text: {
        fontSize: 18
    },
    text1: {
        marginTop: 20, 
        fontSize: 18
    },
    containerButton: {
        justifyContent:'center', 
        alignItems:'center', 
        marginTop: 40
    },
    button: {
        width: 180, 
        height: 50, 
        borderRadius: 10, 
        backgroundColor:'#FFBFBF', 
        justifyContent:'center',
        alignItems:'center'
    },
    text2: {
        fontSize: 24
    }
});
