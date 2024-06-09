export const PyPilotParameterDetails = {
  "profile": {
    "type": "Value",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "profiles": {
    "type": "Value",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "imu.rate": {
    "type": "EnumProperty",
    "persistent": true,
    "writable": true,
    "choices": [
      10,
      20
    ],
    "isDisplayed": true
  },
  "imu.alignmentQ": {
    "type": "ResettableValue",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "imu.heading_offset": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": -180,
    "max": 180,
    "isDisplayed": true
  },
  "imu.gyrobias": {
    "type": "SensorValue",
    "persistent": true,
    "isDisplayed": false
  },
  "imu.accel.calibration": {
    "type": "Value",
    "persistent": true,
    "isDisplayed": true
  },
  "imu.accel.calibration.locked": {
    "type": "BooleanProperty",
    "persistent": true,
    "writable": true,
    "isDisplayed": true
  },
  "imu.accel.calibration.points": {
    "type": "Value",
    "persistent": true,
    "isDisplayed": false
  },
  "imu.compass.calibration": {
    "type": "Value",
    "persistent": true,
    "isDisplayed": false
  },
  "imu.compass.calibration.points": {
    "type": "Value",
    "persistent": true,
    "isDisplayed": false
  },
  "nmea.client": {
    "type": "Value",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "nmea.gps_id": {
    "type": "EnumProperty",
    "persistent": true,
    "writable": true,
    "choices": [
      "APRMC",
      "GPRMC"
    ],
    "isDisplayed": false
  },
  "gps.filtered.output": {
    "type": "BooleanProperty",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "wind.offset": {
    "type": "RangeSetting",
    "persistent": true,
    "writable": true,
    "min": -180,
    "max": 180,
    "units": "deg",
    "isDisplayed": true
  },
  "wind.sensors_height": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 100,
    "isDisplayed": true
  },
  "truewind.offset": {
    "type": "RangeSetting",
    "persistent": true,
    "writable": true,
    "min": -180,
    "max": 180,
    "units": "deg",
    "isDisplayed": true
  },
  "truewind.sensors_height": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 100,
    "isDisplayed": false
  },
  "rudder.offset": {
    "type": "Value",
    "persistent": true,
    "isDisplayed": true
  },
  "rudder.scale": {
    "type": "Value",
    "persistent": true,
    "isDisplayed": true
  },
  "rudder.nonlinearity": {
    "type": "Value",
    "persistent": true,
    "isDisplayed": true
  },
  "rudder.range": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": 10,
    "max": 100,
    "isDisplayed": true
  },
  "apb.xte.gain": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 3000,
    "isDisplayed": false
  },
  "servo.faults": {
    "type": "ResettableValue",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "servo.max_current": {
    "type": "RangeSetting",
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 50,
    "units": "amps",
    "isDisplayed": false
  },
  "servo.current.factor": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": 0.8,
    "max": 1.2,
    "isDisplayed": false
  },
  "servo.current.offset": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": -1.2,
    "max": 1.2,
    "isDisplayed": false
  },
  "servo.voltage.factor": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": 0.8,
    "max": 1.2,
    "isDisplayed": false
  },
  "servo.voltage.offset": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": -1.2,
    "max": 1.2,
    "isDisplayed": false
  },
  "servo.max_controller_temp": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": 45,
    "max": 80,
    "isDisplayed": false
  },
  "servo.max_motor_temp": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": 30,
    "max": 80,
    "isDisplayed": false
  },
  "servo.max_slew_speed": {
    "type": "RangeSetting",
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 100,
    "units": "",
    "isDisplayed": false
  },
  "servo.max_slew_slow": {
    "type": "RangeSetting",
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 100,
    "units": "",
    "isDisplayed": false
  },
  "servo.gain": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": -10,
    "max": 10,
    "isDisplayed": false
  },
  "servo.clutch_pwm": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": 10,
    "max": 100,
    "isDisplayed": false
  },
  "servo.use_brake": {
    "type": "BooleanProperty",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "servo.compensate_current": {
    "type": "BooleanProperty",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "servo.compensate_voltage": {
    "type": "BooleanProperty",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "servo.amp_hours": {
    "type": "ResettableValue",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "servo.position.p": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": 0.01,
    "max": 1,
    "isDisplayed": false
  },
  "servo.position.i": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 0.1,
    "isDisplayed": false
  },
  "servo.position.d": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 0.1,
    "isDisplayed": false
  },
  "servo.use_eeprom": {
    "type": "Value",
    "persistent": true,
    "isDisplayed": false
  },
  "ap.mode": {
    "type": "EnumProperty",
    "persistent": true,
    "writable": true,
    "choices": [
      "compass",
      "gps",
      "nav",
      "wind",
      "true wind"
    ],
    "isDisplayed": false
  },
  "ap.gps_and_nav_modes": {
    "type": "BooleanProperty",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "ap.tack.count": {
    "type": "ResettableValue",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "ap.tack.use_heel": {
    "type": "BooleanProperty",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "ap.tack.use_wind_direction": {
    "type": "BooleanProperty",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "gps.filtered.enabled": {
    "type": "BooleanProperty",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "signalk.period": {
    "type": "RangeProperty",
    "persistent": true,
    "writable": true,
    "min": 0.1,
    "max": 2,
    "isDisplayed": false
  },
  "signalk.uid": {
    "type": "Value",
    "persistent": true,
    "writable": true,
    "isDisplayed": false
  },
  "servo.period": {
    "type": "RangeSetting",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0.1,
    "max": 3,
    "units": "sec",
    "isDisplayed": false
  },
  "servo.speed.min": {
    "type": "RangeSetting",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 100,
    "units": "%",
    "isDisplayed": true
  },
  "servo.speed.max": {
    "type": "RangeSetting",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 100,
    "units": "%",
    "isDisplayed": true
  },
  "ap.pilot.absolute.P": {
    "type": "RangeProperty",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 2,
    "AutopilotGain": true,
    "isDisplayed": true
  },
  "ap.pilot.absolute.I": {
    "type": "RangeProperty",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 0.05,
    "AutopilotGain": true,
    "isDisplayed": true
  },
  "ap.pilot.absolute.D": {
    "type": "RangeProperty",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 2,
    "AutopilotGain": true,
    "isDisplayed": true
  },
  "ap.pilot.absolute.DD": {
    "type": "RangeProperty",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 1,
    "AutopilotGain": true,
    "isDisplayed": true
  },
  "ap.pilot.basic.P": {
    "type": "RangeProperty",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 0.1,
    "AutopilotGain": true,
    "isDisplayed": true
  },
  "ap.pilot.basic.I": {
    "type": "RangeProperty",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 0.1,
    "AutopilotGain": true,
    "isDisplayed": true
  },
  "ap.pilot.basic.D": {
    "type": "RangeProperty",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 0.24,
    "AutopilotGain": true,
    "isDisplayed": true
  },
  "ap.pilot.basic.DD": {
    "type": "RangeProperty",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 0.24,
    "AutopilotGain": true,
    "isDisplayed": true
  },
  "ap.pilot.basic.PR": {
    "type": "RangeProperty",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 0.02,
    "AutopilotGain": true,
    "isDisplayed": true
  },
  "ap.pilot.basic.FF": {
    "type": "RangeProperty",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 2.4,
    "AutopilotGain": true,
    "isDisplayed": true
  },
  "ap.pilot": {
    "type": "EnumProperty",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "choices": [
      "absolute",
      "basic"
    ],
    "isDisplayed": false
  },
  "ap.tack.delay": {
    "type": "RangeSetting",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 0,
    "max": 60,
    "units": "sec",
    "isDisplayed": false
  },
  "ap.tack.angle": {
    "type": "RangeSetting",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 10,
    "max": 180,
    "units": "deg",
    "isDisplayed": false
  },
  "ap.tack.rate": {
    "type": "RangeSetting",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 1,
    "max": 100,
    "units": "deg/s",
    "isDisplayed": false
  },
  "ap.tack.threshold": {
    "type": "RangeSetting",
    "profiled": true,
    "persistent": true,
    "writable": true,
    "min": 10,
    "max": 100,
    "units": "%",
    "isDisplayed": false
  },
  "gps.filtered.declination": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "gps.filtered.time_offset": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "gps.filtered.compass_offset": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "gps.filtered.fix": {
    "type": "Value",
    "isDisplayed": false
  },
  "gps.filtered.speed": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "gps.filtered.track": {
    "type": "SensorValue",
    "directional": true,
    "isDisplayed": false
  },
  "gps.source": {
    "type": "Value",
    "isDisplayed": false
  },
  "wind.source": {
    "type": "Value",
    "isDisplayed": false
  },
  "truewind.source": {
    "type": "Value",
    "isDisplayed": false
  },
  "rudder.source": {
    "type": "Value",
    "isDisplayed": false
  },
  "apb.source": {
    "type": "Value",
    "isDisplayed": false
  },
  "water.source": {
    "type": "Value",
    "isDisplayed": false
  },
  "imu.frequency": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.alignmentCounter": {
    "type": "Value",
    "writable": true,
    "isDisplayed": false
  },
  "imu.uptime": {
    "type": "Value",
    "isDisplayed": false
  },
  "imu.warning": {
    "type": "Value",
    "isDisplayed": false
  },
  "imu.heading_lowpass_constant": {
    "type": "RangeProperty",
    "writable": true,
    "min": 0.05,
    "max": 0.3,
    "isDisplayed": false
  },
  "imu.headingrate_lowpass_constant": {
    "type": "RangeProperty",
    "writable": true,
    "min": 0.05,
    "max": 0.3,
    "isDisplayed": false
  },
  "imu.headingraterate_lowpass_constant": {
    "type": "RangeProperty",
    "writable": true,
    "min": 0.05,
    "max": 0.3,
    "isDisplayed": false
  },
  "imu.accel": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.gyro": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.compass": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.accel.residuals": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.pitch": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.roll": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.pitchrate": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.rollrate": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.headingrate": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.headingraterate": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.heel": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.headingrate_lowpass": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.headingraterate_lowpass": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.heading": {
    "type": "SensorValue",
    "directional": true,
    "isDisplayed": false
  },
  "imu.heading_lowpass": {
    "type": "SensorValue",
    "directional": true,
    "isDisplayed": false
  },
  "imu.fusionQPose": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "gps.rate": {
    "type": "RangeProperty",
    "writable": true,
    "min": 0,
    "max": 50,
    "isDisplayed": false
  },
  "gps.track": {
    "type": "SensorValue",
    "directional": true,
    "isDisplayed": false
  },
  "gps.speed": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "gps.fix": {
    "type": "Value",
    "isDisplayed": false
  },
  "gps.leeway_ground": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "gps.compass_error": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "gps.declination": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "gps.alignmentCounter": {
    "type": "Value",
    "writable": true,
    "isDisplayed": false
  },
  "wind.rate": {
    "type": "RangeProperty",
    "writable": true,
    "min": 0,
    "max": 50,
    "isDisplayed": false
  },
  "wind.direction": {
    "type": "SensorValue",
    "directional": true,
    "isDisplayed": false
  },
  "wind.speed": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "truewind.rate": {
    "type": "RangeProperty",
    "writable": true,
    "min": 0,
    "max": 50,
    "isDisplayed": false
  },
  "truewind.direction": {
    "type": "SensorValue",
    "directional": true,
    "isDisplayed": false
  },
  "truewind.speed": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "rudder.rate": {
    "type": "RangeProperty",
    "writable": true,
    "min": 0,
    "max": 50,
    "isDisplayed": false
  },
  "rudder.angle": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "rudder.speed": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "rudder.calibration_state": {
    "type": "EnumProperty",
    "writable": true,
    "choices": [
      "idle",
      "reset",
      "centered",
      "starboard range",
      "port range",
      "auto gain"
    ],
    "isDisplayed": false
  },
  "apb.track": {
    "type": "SensorValue",
    "directional": true,
    "isDisplayed": false
  },
  "apb.xte": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "water.rate": {
    "type": "RangeProperty",
    "writable": true,
    "min": 0,
    "max": 50,
    "isDisplayed": false
  },
  "water.speed": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "water.leeway": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "water.leeway.source": {
    "type": "Value",
    "isDisplayed": false
  },
  "water.current.speed": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "water.current.direction": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "water.wind.speed": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "water.wind.direction": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "servo.calibration": {
    "type": "Value",
    "isDisplayed": false
  },
  "servo.position_command": {
    "type": "Value",
    "writable": true,
    "isDisplayed": false
  },
  "servo.command": {
    "type": "Value",
    "writable": true,
    "isDisplayed": false
  },
  "servo.speed_gain": {
    "type": "RangeProperty",
    "writable": true,
    "min": 0,
    "max": 1,
    "isDisplayed": false
  },
  "servo.duty": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "servo.voltage": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "servo.current": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "servo.current.noise": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "servo.controller_temp": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "servo.motor_temp": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "servo.engaged": {
    "type": "Value",
    "isDisplayed": false
  },
  "servo.watts": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "servo.speed": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "servo.position": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "servo.raw_command": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "servo.state": {
    "type": "Value",
    "isDisplayed": false
  },
  "servo.controller": {
    "type": "Value",
    "isDisplayed": false
  },
  "servo.flags": {
    "type": "Value",
    "isDisplayed": false
  },
  "ap.version": {
    "type": "Value",
    "isDisplayed": false
  },
  "timestamp": {
    "type": "TimeStamp",
    "isDisplayed": false
  },
  "ap.preferred_mode": {
    "type": "Value",
    "isDisplayed": false
  },
  "ap.modes": {
    "type": "Value",
    "isDisplayed": false
  },
  "ap.heading_command": {
    "type": "RangeProperty",
    "writable": true,
    "min": -180,
    "max": 360,
    "isDisplayed": false
  },
  "ap.enabled": {
    "type": "BooleanProperty",
    "writable": true,
    "isDisplayed": false
  },
  "ap.heading": {
    "type": "SensorValue",
    "directional": true,
    "isDisplayed": false
  },
  "ap.heading_error": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "ap.heading_error_int": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "ap.heading_command_rate": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "ap.pilot.absolute.Pgain": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "ap.pilot.absolute.Igain": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "ap.pilot.absolute.Dgain": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "ap.pilot.absolute.DDgain": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "ap.pilot.basic.Pgain": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "ap.pilot.basic.Igain": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "ap.pilot.basic.Dgain": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "ap.pilot.basic.DDgain": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "ap.pilot.basic.PRgain": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "ap.pilot.basic.FFgain": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "ap.tack.state": {
    "type": "EnumProperty",
    "writable": true,
    "choices": [
      "none",
      "begin",
      "waiting",
      "tacking"
    ],
    "isDisplayed": false
  },
  "ap.tack.timeout": {
    "type": "Value",
    "isDisplayed": false
  },
  "ap.tack.direction": {
    "type": "EnumProperty",
    "writable": true,
    "choices": [
      "none",
      "port",
      "starboard"
    ],
    "isDisplayed": false
  },
  "ap.runtime": {
    "type": "Value",
    "isDisplayed": false
  },
  "ap.timings": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.error": {
    "type": "Value",
    "isDisplayed": false
  },
  "imu.accel.calibration.age": {
    "type": "Value",
    "isDisplayed": false
  },
  "imu.accel.calibration.sigmapoints": {
    "type": "Value",
    "isDisplayed": false
  },
  "imu.accel.calibration.log": {
    "type": "Value",
    "writable": true,
    "isDisplayed": false
  },
  "imu.compass.calibration.age": {
    "type": "Value",
    "isDisplayed": false
  },
  "imu.compass.calibration.sigmapoints": {
    "type": "Value",
    "isDisplayed": false
  },
  "imu.compass.calibration.log": {
    "type": "Value",
    "writable": true,
    "isDisplayed": false
  },
  "imu.compass.calibration.field_strength": {
    "type": "SensorValue",
    "isDisplayed": false
  },
  "imu.compass.calibration.inclination": {
    "type": "SensorValue",
    "isDisplayed": false
  }
}
