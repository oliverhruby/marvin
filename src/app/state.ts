/**
 * Represents the complete robot vehicle state.
 * This contains most up-to-date sensor readings,
 * statistic information like up-time, etc.
 */
interface State {
  // statistics
  stats: {
    // time since the vehicle was started
    uptime: number;
  }
  // root for existing devices
  //devices: Array<Device>
}
}
