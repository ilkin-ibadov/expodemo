import { Tabs } from 'expo-router'

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen
                name="home/index"
                options={{
                    headerTitle: "Home",
                    title: "Home"
                }}
            />
            <Tabs.Screen
                name="index"
                options={{
                    href: null
                }}
            />
            <Tabs.Screen
                name="profile/index"
                options={{
                    headerTitle: "Profile",
                    title: "Profile"
                }} />
        </Tabs>
    )
}

export default TabsLayout