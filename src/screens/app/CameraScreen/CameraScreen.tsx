import React, {useRef, useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {
  Camera,
  Templates,
  useCameraDevice,
  useCameraFormat,
} from 'react-native-vision-camera';

import {Box, Icon, PermissionManager} from '@components';
import {useAppSafeArea, useAppState} from '@hooks';
import {AppScreenProps} from '@routes';
import {multimediaService} from '@services';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - SCREEN_WIDTH) / 2;
const CONTROL_DIFF = 30;

export const CameraScreen = ({navigation}: AppScreenProps<'CameraScreen'>) => {
  const cameraRef = useRef<Camera>(null);
  const [flashOn, setFlashOn] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const {top} = useAppSafeArea();
  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'wide-angle-camera',
      'telephoto-camera',
    ],
  });

  const format = useCameraFormat(device, Templates.Instagram);
  const isFocused = useIsFocused();
  const appState = useAppState();

  const isActive = isFocused && appState === 'active';

  const toggleFlash = () => setFlashOn(prev => !prev);

  const onInitialized = () => {
    setIsReady(true);
  };

  const takePhoto = async () => {
    if (!cameraRef.current) {
      return;
    }
    const photoFile = await cameraRef.current.takePhoto({
      flash: flashOn ? 'on' : 'off',
      qualityPrioritization: 'quality',
    });

    navigation.navigate('PublishPostScreen', {
      imageUri: multimediaService.prepareImageUri(photoFile.path),
    });
  };

  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o Nubble acessar a camera">
      <Box flex={1}>
        {device != null && (
          <Camera
            ref={cameraRef}
            format={format}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={isActive}
            onInitialized={onInitialized}
            photo={true}
            enableHighQualityPhotos={true}
          />
        )}

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
            {isReady && (
              <Icon
                size={80}
                name="cameraClick"
                color="grayWhite"
                onPress={takePhoto}
              />
            )}
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  );
};
