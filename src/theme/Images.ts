import { Image } from 'react-native'

const images = {
  settings: Image.resolveAssetSource(require('../assets/icons/settings.png')),
  newspaper: Image.resolveAssetSource(require('../assets/icons/newspaper.png')),
  back: Image.resolveAssetSource(require('../assets/icons/back.png'))
}

export default images
