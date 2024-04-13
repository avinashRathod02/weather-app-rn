import DeviceInfo from 'react-native-device-info'

// Production
const ENDPOINT = 'https://eklavya.app'
const TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZmlyc3ROYW1lIjoiUGFydGgiLCJsYXN0TmFtZSI6IkpldGh3YSIsInJvbGUiOjEsInRlbGVncmFtSWQiOjc5MjMxMDY5OSwiZW1haWwiOiJwYXJ0aGoxOTExQGdtYWlsLmNvbSIsImlhdCI6MTcwNjI1MjU3NywiZXhwIjoxNzA2MzM4OTc3fQ.0-zmRHBoQUVQSvc5Gkp7dKHgJ6kHcFk3Th_g3xuo9xM'

const AUTO_FILL_OTP_SIGNATURE = 'yHjydfrLhfi'
// Staging
// const ENDPOINT = ''

const ENDPOINT_API = ENDPOINT + ''
const APP_VERSION = `${DeviceInfo.getVersion()}(${DeviceInfo.getBuildNumber()})`
export default {
  ENDPOINT,
  ENDPOINT_API,
  TOKEN,
  APP_VERSION,
  AUTO_FILL_OTP_SIGNATURE
}
