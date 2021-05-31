import React from 'react';
import {IconProps} from 'react-native-vector-icons/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {VARIANT} from 'src/Constants/Types';
import {useThemeValue} from 'src/Recoil/Atoms/themeAtom';
import Click, {ClickProps} from '../Click/Click';

type IconButtonProps = {
  type?: 'MaterialCommunityIcons';
  clickProps?: ClickProps;
  variant?: VARIANT;
  onPress?: () => void;
};

function IconButton(props: IconButtonProps & Omit<IconProps, 'onPress'>) {
  const {
    type = 'MaterialCommunityIcons',
    clickProps = {variant: 'transparent'},
    color,
    variant = 'white',
    size = 24,
    onPress,
    ...iconProps
  } = props;
  const theme = useThemeValue();

  switch (type) {
    case 'MaterialCommunityIcons': {
      return (
        <Click
          overflow={'hidden'}
          middle
          center
          onPress={onPress}
          h={size * 1.5}
          w={size * 1.5}
          br={(size * 1.5) / 2}
          elevation={clickProps.elevation ?? 0}
          {...clickProps}>
          <MaterialCommunityIcons
            size={size}
            color={color ? color : theme.colors[variant]}
            {...iconProps}
          />
        </Click>
      );
    }
  }
}

export default IconButton;
