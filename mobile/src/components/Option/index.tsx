import React from 'react';
import { 
    View,
    TouchableOpacity,
    TouchableOpacityProps,
    Image,
    ImageProps,
    Text,
 } from 'react-native';

import { styles } from './styles';

interface Props extends TouchableOpacityProps {
    title: string
    image: ImageProps //like an image

}

export function Option({title, image, ...rest}: Props) {
  return (
    <TouchableOpacity 
    style={styles.container}
    {...rest} //no need to type the rest props
    >

        <Image
            source={image}
            style={styles.image}
        />
        <Text style={styles.title}>
            {title}
        </Text>

    </TouchableOpacity>
  );
}