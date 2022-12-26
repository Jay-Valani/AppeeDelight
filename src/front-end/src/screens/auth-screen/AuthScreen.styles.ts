import {StyleSheet} from 'react-native';
import {colors, FontSize, scale, verticalScale} from '../../libs';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhite,
  },
  heraderBackground: {
    backgroundColor: colors.headerBackground,
    flex: 0.2,
  },
  authContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: verticalScale(20),
  },
  signupContainer: {
    backgroundColor: colors.white,
    borderRadius: 30,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(50),
    right: -20,
  },
  loginContainer: {
    backgroundColor: colors.darkBlue,
    borderRadius: 30,
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(50),
    left: -20,
  },
  authText: {
    fontSize: FontSize.FONT_15Px,
    fontFamily: 'OpenSans-SemiBoldItalic',
  },
  bodyComponent: {
    flex: 0.8,
  },
});
