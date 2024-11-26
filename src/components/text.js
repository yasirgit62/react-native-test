import { Text } from 'react-native';
const RNText = (props) => {
    const { style, bold, ...otherprops } = props
    return <Text {...otherprops} style={[{ fontFamily: (bold) ? 'Poppins-Bold' : 'Poppins-Regular' }, style]} >
        {props.children}
    </Text>

}
export default RNText