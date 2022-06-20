import { StyleSheet } from "react-native";
import { moderateScale, scale, verticalScale } from "../../styles/scaling";
import themes from "../../styles/theme";

export default StyleSheet.create({
    content:{
        padding: scale(20)
    },
    welcome:{
        fontSize:moderateScale(20),
        color:themes.black
    },
    title:{
        fontSize:moderateScale(15),
        color:themes.black,
        marginTop:verticalScale(8)
    },
   
    
})