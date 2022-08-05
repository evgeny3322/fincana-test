import * as React from 'react';
import * as Progress from 'react-native-progress';

const MyComponent = () => (
    <>
        <Progress.Bar
            animated={true}
            progress={0}
            // animationType={'decay' | 'timing' | 'spring'}
            animationType='spring'
            // animationConfig={{bounciness: 3}}
            indeterminate={true}
            width={200}
            indeterminateAnimationDuration={1000}
            // useNativeDriver={true}
        />
    </>

);

export default MyComponent;