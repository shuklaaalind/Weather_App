import {StackHeaderProps} from '@react-navigation/stack';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Paper from 'src/Components/Shared/Paper/Paper';
import Typography from 'src/Components/Shared/Typography/Typography';

function BaseHeader(props: StackHeaderProps) {
  const {scene} = props;
  const insets = useSafeAreaInsets();
  const {options} = scene.descriptor;
  const title = options?.headerTitle;

  return (
    <Paper elevation={10} variant={'primary'}>
      <Paper h={insets.top} />
      <Paper ph={15} row h={55}>
        <Paper flex={8} middle center>
          <Typography fontSize={20} variant={'white'}>
            {title}
          </Typography>
        </Paper>
      </Paper>
    </Paper>
  );
}

export default BaseHeader;
