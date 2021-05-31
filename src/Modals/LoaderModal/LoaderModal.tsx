import React from 'react';
import {Modal} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import Paper from 'src/Components/Shared/Paper/Paper';
import {useLoaderValue} from 'src/Recoil/Atoms/loaderAtom';
import {useThemeValue} from 'src/Recoil/Atoms/themeAtom';

function LoaderModal() {
  const visible = useLoaderValue();
  const theme = useThemeValue();

  return (
    <Modal visible={visible} transparent hardwareAccelerated>
      <Paper w100 h100 middle center variant={'disabled'}>
        <MaterialIndicator color={theme.colors.primary} />
      </Paper>
    </Modal>
  );
}

export default LoaderModal;
