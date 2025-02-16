import { Text, View } from 'react-native'
import React from 'react'
import Logo from "../../assets/icons/logo.svg"

const index = () => {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
            <Logo />
            <Text className='text-[32px] font-montserratLightItalic'>Homepage</Text>
        </View>
    )

}

export default index