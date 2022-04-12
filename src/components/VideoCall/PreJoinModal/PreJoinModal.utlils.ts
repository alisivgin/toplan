export function generateMediaInputOptions(devices: MediaDeviceInfo[]) {
  return devices.map(device => ({
    deviceId: device.deviceId,
    groupId: device.groupId,
    kind: device.kind,
    label: device.label,
    value: device.deviceId,
  }));
}
