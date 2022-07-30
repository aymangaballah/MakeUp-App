import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { COLOR, FONTS, ICONS } from "../constants"

export const Styles = StyleSheet.create({

    container: {
        backgroundColor: '#ddd',
        flex: 1
    },
    header: {
        width: "100%",
        height: RFValue(60),
        backgroundColor: COLOR.PrimaryColor,
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    HeaderIcon: {
        width: RFValue(50),
        height: '100%',
        //  backgroundColor: '#f0f',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_header: {
        fontSize: FONTS.h4,
        fontWeight: 'bold',
        color: '#fff',
        alignSelf: 'center'
    },
    storyContainer: {
        width: RFValue(70),
        height: RFValue(90),
        flexDirection: "column",
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: RFValue(15),

    },
    storyImageContainer: {
        width: RFValue(75),
        height: RFValue(75),
        borderRadius: RFValue(75 / 2),
        borderColor: "#f0f",
        borderWidth: 1.5,
        alignItems: "center",
        justifyContent: 'center'
    },
    storyImage: {
        width: RFValue(70),
        height: RFValue(70),
        borderRadius: RFValue(35),

    },

    textheader_List: {
        fontSize: FONTS.h3,
        fontWeight: 'bold',
        color: COLOR.dark_gray,
        paddingHorizontal: RFValue(22),
        paddingVertical: RFValue(8),

    },
    storyName: {
        fontSize: 14,
        width: RFValue(90),
        height: RFValue(50),
        marginRight: RFValue(10),
        textAlign: 'center',
    },
    postContainer: {
        width: "100%",
        height: RFValue(190),
       // backgroundColor: '#f00',
        flexDirection: 'column',
        paddingHorizontal: RFValue(22),
        marginBottom: 10

    },
    postHeader: {
        width: "100%",
        height: RFValue(55),
       // backgroundColor: "#ff0",
        flexDirection: 'row',
        justifyContent: "space-between",
    },
    artistImageContainer: {
        width: RFValue(45),
        height: RFValue(45),
        borderRadius: RFValue(45 / 2),
        borderColor: "#f0f",
        borderWidth: 1.5,
        alignItems: "center",
        justifyContent: 'center',
    },
    artistImage: {
        width: RFValue(40),
        height: RFValue(40),
        borderRadius: RFValue(20),
    },
    img_name_follow: {
        width: "65%",
        //backgroundColor: "#00f",
        alignItems: "center",
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    styleImagePost: {
        width: "100%",
        height: RFValue(160),
        //backgroundColor: '#00f',
        // marginBottom:10
    },
    Like_comment_view:{
        width: "100%",
        height: RFValue(55),
        //backgroundColor: "#0f0",
        flexDirection: 'row',
        justifyContent: "space-between",
    }


})



