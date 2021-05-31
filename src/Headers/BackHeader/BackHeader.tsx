import {StackHeaderProps} from '@react-navigation/stack';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import IconButton from 'src/Components/Shared/IconButton/IconButton';
import Paper from 'src/Components/Shared/Paper/Paper';
import Typography from 'src/Components/Shared/Typography/Typography';

function BackHeader(props: StackHeaderProps) {
  const {navigation, scene} = props;
  const insets = useSafeAreaInsets();
  const {options} = scene.descriptor;
  const title = options?.headerTitle;

  return (
    <Paper elevation={10} variant={'adaptivePrimary'}>
      <Paper h={insets.top} />
      <Paper ph={15} row h={55}>
        <Paper middle flex={1}>
          <IconButton name={'arrow-left'} onPress={navigation.goBack} />
        </Paper>
        <Paper flex={8} middle center>
          <Typography fontSize={20} variant={'white'}>
            {title}
          </Typography>
        </Paper>
        <Paper flex={1} />
      </Paper>
    </Paper>
  );
}

export default BackHeader;
