/**
 * Ignore some yellowbox warnings. Some of these are for deprecated functions
 * that we haven't gotten around to replacing yet.
 */
import { LogBox, Platform } from "react-native"

// prettier-ignore
if (Platform.OS !== 'web') {
  LogBox.ignoreLogs([
    "Require cycle:",
  ])
}
