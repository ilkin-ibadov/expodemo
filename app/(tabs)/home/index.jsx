import { View, Text } from "react-native"
import { Link } from "expo-router"
import { useEffect, useState } from 'react'
import Constants from "expo-constants"

const IP_URL = Constants.expoConfig.extra.IP_URL
const ACCESS_TOKEN = Constants.expoConfig.extra.ACCESS_TOKEN

const Index = () => {
    const [movies, setMovies] = useState([])

    const getMovies = async () => {
        try {
            const response = await fetch(`${IP_URL}/movie/trending`)
            const data = await response.json()

            setMovies(data.content)

            console.log(data.content)

        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    return (
        <View><Text>
            Home
            <Link href="/test">Go to Homepage</Link>
        </Text></View>
    )
}

export default Index