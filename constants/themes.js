
import { RFValue } from "react-native-responsive-fontsize"

export const COLOR = {
    PrimaryColor: "#CC06E0",
    White: "#fff",
    dark_gray: "#333232",
    red: "#f00",
    gray: "#b2b2b2",
    black:"#000"
}

export const ICONS = {
    xsIcon: RFValue(10) >= 10 ? RFValue(10) : 5,
    smIcon: RFValue(15) >= 15 ? RFValue(15) : 10,
    mdIcon: RFValue(20) >= 20 ? RFValue(20) : 15,
    lgIcon: RFValue(25) >= 25 ? RFValue(25) : 20,
    xlIcon: RFValue(30) >= 30 ? RFValue(30) : 25,
};

export const FONTS = {
    h1: RFValue(35) >= 35 ? RFValue(35) : 30,
    h2: RFValue(30) >= 30 ? RFValue(30) : 25,
    h3: RFValue(25) >= 25 ? RFValue(25) : 20,
    h4: RFValue(20) >= 20 ? RFValue(20) : 17,
    h5: RFValue(15) >= 15 ? RFValue(15) : 14,
    h6: RFValue(10) >= 10 ? RFValue(10) : 10
}