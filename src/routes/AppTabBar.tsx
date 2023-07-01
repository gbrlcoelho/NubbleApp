import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {
  Box,
  BoxProps,
  Icon,
  Text,
  TextProps,
  TouchableOpacityBox,
  TouchableOpacityBoxProps,
} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppTabBottomTabParamList, mapScreenToProps} from '@routes';
import {$shadowProps} from '@theme';

export const AppTabBar = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const {bottom} = useAppSafeArea();

  return (
    <Box {...$boxWrapper} style={[{paddingBottom: bottom}, $shadowProps]}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const tabItem =
          mapScreenToProps[route.name as keyof AppTabBottomTabParamList];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              params: route.params,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={route.key}
            {...$itemWrapper}
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon
              name={isFocused ? tabItem.icon.focused : tabItem.icon.unfocused}
              color={isFocused ? 'primary' : 'backgroundContrast'}
            />
            <Text
              {...$label}
              color={isFocused ? 'primary' : 'backgroundContrast'}>
              {tabItem.label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
};

const $label: TextProps = {
  preset: 'paragraphCaption',
  semiBold: true,
  marginTop: 's4',
};

const $itemWrapper: TouchableOpacityBoxProps = {
  activeOpacity: 1,
  alignItems: 'center',
  accessibilityRole: 'button',
  flex: 1,
};

const $boxWrapper: BoxProps = {
  flexDirection: 'row',
  backgroundColor: 'background',
  paddingTop: 's12',
};
