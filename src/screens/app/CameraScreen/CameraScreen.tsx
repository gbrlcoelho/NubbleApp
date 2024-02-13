import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {Box, Icon, PermissionManager} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - SCREEN_WIDTH) / 2;
const CONTROL_DIFF = 30;

export const CameraScreen = ({navigation}: AppScreenProps<'CameraScreen'>) => {
  const [flashOn, setFlashOn] = useState(false);
  const {top} = useAppSafeArea();

  const toggleFlash = () => setFlashOn(prev => !prev);

  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o Nubble acessar a camera">
      <Box flex={1}>
        <Box backgroundColor="grayWhite" style={StyleSheet.absoluteFill} />

        <Box flex={1} justifyContent="space-between">
          <Box
            flexDirection="row"
            backgroundColor="black60"
            justifyContent="space-between"
            height={CONTROL_HEIGHT - CONTROL_DIFF}
            style={{paddingTop: top}}
            paddingHorizontal="s24">
            <Icon
              name="arrowLeft"
              size={20}
              color="grayWhite"
              onPress={navigation.goBack}
            />
            <Icon
              name={flashOn ? 'flashOn' : 'flashOff'}
              size={20}
              color="grayWhite"
              onPress={toggleFlash}
            />
            <Box width={20} />
          </Box>

          <Box
            backgroundColor="black60"
            height={CONTROL_HEIGHT + CONTROL_DIFF}
            justifyContent="center"
            alignItems="center">
            <Icon size={80} name="cameraClick" color="grayWhite" />
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  );
};
