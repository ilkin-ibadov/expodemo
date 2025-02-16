import { View, Text } from "react-native"
import { Link } from "expo-router"

const Index = () => {
    return (
        <View><Text>
            Home
            <Link href="/test">Go to Homepage</Link>
        </Text></View>
    )
}

export default Index