import React, { useEffect, useState } from "react"
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions
} from "react-native";
import Feather from "react-native-vector-icons/Feather"
import { RFValue } from "react-native-responsive-fontsize"
import { Styles } from "../screens"
import { images } from "../constants"
import { FONTS, ICONS } from "../constants"

const hightlights = [
    { name: "Alaa Mohamed ", img: images.story1 },
    { name: "Salma Mohsen", img: images.story2 },
    { name: "Asmaa ", img: images.story3 },
    { name: "Alaa", img: images.story1 },
    { name: "Salma", img: images.story2 },
    { name: "Asmaa", img: images.story3 },
    { name: "Alaa", img: images.story1 },
    { name: "Salma", img: images.story2 },
    { name: "Asmaa", img: images.story3 },
    { name: "Alaa", img: images.story1 },
    { name: "Salma", img: images.story2 },
    { name: "Asmaa", img: images.story3 },
    { name: "Alaa", img: images.story1 },
    { name: "Salma", img: images.story2 },
    { name: "Asmaa", img: images.story3 },
    { name: "Alaa", img: images.story1 },
    { name: "Salma", img: images.story2 },
    { name: "Asmaa", img: images.story3 },
]
const posts = [
    {
        name: "Aya Mohamed",
        img_artist: images.story1,
        imge_post: images.story2,
        description: "Hi i want to sleep",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    },
    {
        name: "Rana Khaled",
        img_artist: images.story3,
        imge_post: images.story4,
        description: "",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    }, {
        name: "Nour Ahmed",
        img_artist: images.story5,
        imge_post: images.story6,
        description: "Hi i will kill u ",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    },
    {
        name: "Doha Abdulla",
        img_artist: images.story7,
        imge_post: images.story8,
        description: "this is my first post ",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    },
    {
        name: "Dalia Mohsen",
        img_artist: images.story9,
        imge_post: images.story1,
        description: "",
        isFollow: false,
        isSaved: false,
        isLiked: false,

    },
]
export default function Home(props) {

    return (
        <>

            <View style={Styles.container}>
                {/* Header */}
                <View style={Styles.header}>
                    <TouchableOpacity style={Styles.HeaderIcon}
                    >
                        < Feather name="align-justify" size={20} color={"#fff"} />
                    </TouchableOpacity>
                    <Text style={Styles.text_header}>Make UP </Text>
                    <TouchableOpacity style={Styles.HeaderIcon}>
                        <Feather name="bell" size={ICONS.mdIcon} color={"#fff"} />
                    </TouchableOpacity>

                </View>
                <ScrollView>


                    <Text style={Styles.textheader_List}>Hightlights</Text>
                    {/* Hightlights */}
                    <FlatList
                        horizontal
                        contentContainerStyle={{ paddingHorizontal: RFValue(22), height: RFValue(120) }}
                        data={hightlights}
                        renderh
                        renderItem={({ item, index }) => {
                            return (
                                <>
                                    <TouchableOpacity style={Styles.storyContainer}>
                                        <View style={Styles.storyImageContainer}>
                                            <Image source={item.img} style={Styles.storyImage} />

                                        </View>

                                        <Text style={Styles.storyName}>{item.name}</Text>
                                    </TouchableOpacity>
                                </>
                            )
                        }}
                    />
                    {/* Posts */}
                    <Text style={[Styles.textheader_List, { fontSize: FONTS.h4 }]}>Today's Work In Progress</Text>

                    <FlatList
                        data={posts}
                        renderItem={({ index, item }) => {
                            return (
                                <>
                                    <View style={Styles.postContainer}>

                                        <View style={Styles.postHeader}>

                                            <View style={Styles.img_name_follow}>

                                                <TouchableOpacity style={Styles.artistImageContainer}>
                                                    <Image source={item.img_artist} style={Styles.artistImage} />
                                                </TouchableOpacity>
                                                <TouchableOpacity style={{ width: "50%" }}>
                                                    <Text style={{ fontSize: 14, fontWeight: "bold" }}>{item.name + "."}</Text>

                                                </TouchableOpacity>
                                                <TouchableOpacity>
                                                    <Text style={{ fontSize: 14, fontWeight: "bold", color: '#2780ec', marginLeft: RFValue(8) }}>Follow</Text>
                                                </TouchableOpacity>
                                            </View>

                                            <TouchableOpacity style={Styles.HeaderIcon}>
                                                <Feather name="bookmark" size={ICONS.mdIcon} />
                                            </TouchableOpacity>
                                        </View>


                                        <View >
                                            <Image source={item.imge_post}
                                                style={[Styles.styleImagePost,{resizeMode:"center"}]}
                                               
                                            />
                                        </View>
                                        <View style={Styles.Like_comment_view}>

                                        </View>

                                    </View>

                                </>
                            )
                        }}
                    />
                </ScrollView>
            </View>

        </>
    )
}
// <View style={Styles.postContainer}>
// <View style={Styles.postHeader}></View>
// <View>
//     <Image source={images.story3} style={{width:"100%",height:"50%"}}/>
// </View>
// <View style={ [Styles.postHeader,{backgroundColor:'#0f0'}]}>

// </View>
// </View>