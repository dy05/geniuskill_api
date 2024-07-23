import {StyleSheet, TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

const BackButton = ({onPress}) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.button} onPress={onPress ? onPress : () => navigation.goBack()} accessibilityLabel="Back">
            <svg  style={styles.svg} width="26" height="21" viewBox="0 0 26 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.621465 8.6381C0.223522 9.03654 1.4037e-06 9.57664 1.32986e-06 10.1398C1.25601e-06 10.7029 0.223522 11.243 0.621465 11.6414L8.63413 19.6583C9.03277 20.057 9.57345 20.2809 10.1372 20.2809C10.701 20.2809 11.2417 20.057 11.6403 19.6583C12.0389 19.2597 12.2629 18.719 12.2629 18.1553C12.2629 17.5915 12.0389 17.0508 11.6403 16.6522L7.2543 12.2648L23.5955 12.2648C24.1591 12.2648 24.6996 12.0409 25.0981 11.6424C25.4967 11.2439 25.7205 10.7034 25.7205 10.1398C25.7205 9.57618 25.4967 9.03568 25.0981 8.63717C24.6996 8.23865 24.1591 8.01477 23.5955 8.01477L7.2543 8.01476L11.6403 3.62876C11.8377 3.43138 11.9943 3.19705 12.1011 2.93915C12.2079 2.68125 12.2629 2.40483 12.2629 2.12568C12.2629 1.84653 12.2079 1.57012 12.1011 1.31222C11.9943 1.05432 11.8377 0.819986 11.6403 0.622598C11.4429 0.425211 11.2086 0.268636 10.9507 0.161811C10.6928 0.0549845 10.4164 1.36594e-06 10.1372 1.32933e-06C9.85807 1.29273e-06 9.58165 0.0549844 9.32375 0.161811C9.06585 0.268636 8.83152 0.42521 8.63413 0.622598L0.621465 8.6381Z" fill="#1B5091"/>
            </svg>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        backgroundColor: '#1B5091',
    },
    svg: {
        color: '#1B5091',
    },
});

export default BackButton;
