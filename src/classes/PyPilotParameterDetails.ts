export const PyPilotParameterDetails = {
    "profile": {
        "desc": "Property-Description",
        "type": "Value",
        "persistent": true,
        "writable": true
    },
    "profiles": {
        "desc": "Property-Description",
        "type": "Value",
        "persistent": true,
        "writable": true
    },
    "imu.rate": {
        "desc": "Property-Description",
        "type": "EnumProperty",
        "persistent": true,
        "writable": true,
        "choices": [
            10,
            20
        ]
    },
    "imu.alignmentQ": {
        "desc": "Property-Description",
        "type": "ResettableValue",
        "persistent": true,
        "writable": true
    },
    "imu.heading_offset": {
        "desc": "Kompass Offset",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": -180,
        "max": 180
    },
    "imu.gyrobias": {
        "desc": "Property-Description",
        "type": "SensorValue",
        "persistent": true
    },
    "imu.accel.calibration": {
        "desc": "Property-Description",
        "type": "Value",
        "persistent": true
    },
    "imu.accel.calibration.locked": {
        "desc": "Kompass Kalibrierung sperren",
        "type": "BooleanProperty",
        "persistent": true,
        "writable": true
    },
    "imu.accel.calibration.points": {
        "desc": "Property-Description",
        "type": "Value",
        "persistent": true
    },
    "imu.compass.calibration": {
        "desc": "Property-Description",
        "type": "Value",
        "persistent": true
    },
    "imu.compass.calibration.locked": {
        "desc": "Property-Description",
        "type": "BooleanProperty",
        "persistent": true,
        "writable": true
    },
    "imu.compass.calibration.points": {
        "desc": "Property-Description",
        "type": "Value",
        "persistent": true
    },
    "nmea.client": {
        "desc": "Property-Description",
        "type": "Value",
        "persistent": true,
        "writable": true
    },
    "nmea.gps_id": {
        "desc": "Property-Description",
        "type": "EnumProperty",
        "persistent": true,
        "writable": true,
        "choices": [
            "APRMC",
            "GPRMC"
        ]
    },
    "gps.filtered.output": {
        "desc": "Property-Description",
        "type": "BooleanProperty",
        "persistent": true,
        "writable": true
    },
    "wind.offset": {
        "desc": "Property-Description",
        "type": "RangeSetting",
        "persistent": true,
        "writable": true,
        "min": -180,
        "max": 180,
        "units": "deg"
    },
    "wind.sensors_height": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 100
    },
    "truewind.offset": {
        "desc": "Property-Description",
        "type": "RangeSetting",
        "persistent": true,
        "writable": true,
        "min": -180,
        "max": 180,
        "units": "deg"
    },
    "truewind.sensors_height": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 100
    },
    "rudder.offset": {
        "desc": "Property-Description",
        "type": "Value",
        "persistent": true
    },
    "rudder.scale": {
        "desc": "Property-Description",
        "type": "Value",
        "persistent": true
    },
    "rudder.nonlinearity": {
        "desc": "Property-Description",
        "type": "Value",
        "persistent": true
    },
    "rudder.range": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": 10,
        "max": 100
    },
    "apb.xte.gain": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 3000
    },
    "servo.faults": {
        "desc": "Property-Description",
        "type": "ResettableValue",
        "persistent": true,
        "writable": true
    },
    "servo.max_current": {
        "desc": "Property-Description",
        "type": "RangeSetting",
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 50,
        "units": "amps"
    },
    "servo.current.factor": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": 0.8,
        "max": 1.2
    },
    "servo.current.offset": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": -1.2,
        "max": 1.2
    },
    "servo.voltage.factor": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": 0.8,
        "max": 1.2
    },
    "servo.voltage.offset": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": -1.2,
        "max": 1.2
    },
    "servo.max_controller_temp": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": 45,
        "max": 80
    },
    "servo.max_motor_temp": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": 30,
        "max": 80
    },
    "servo.max_slew_speed": {
        "desc": "Property-Description",
        "type": "RangeSetting",
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 100,
        "units": ""
    },
    "servo.max_slew_slow": {
        "desc": "Property-Description",
        "type": "RangeSetting",
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 100,
        "units": ""
    },
    "servo.gain": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": -10,
        "max": 10
    },
    "servo.clutch_pwm": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": 10,
        "max": 100
    },
    "servo.use_brake": {
        "desc": "Property-Description",
        "type": "BooleanProperty",
        "persistent": true,
        "writable": true
    },
    "servo.compensate_current": {
        "desc": "Property-Description",
        "type": "BooleanProperty",
        "persistent": true,
        "writable": true
    },
    "servo.compensate_voltage": {
        "desc": "Property-Description",
        "type": "BooleanProperty",
        "persistent": true,
        "writable": true
    },
    "servo.amp_hours": {
        "desc": "Property-Description",
        "type": "ResettableValue",
        "persistent": true,
        "writable": true
    },
    "servo.position.p": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": 0.01,
        "max": 1
    },
    "servo.position.i": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 0.1
    },
    "servo.position.d": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 0.1
    },
    "servo.use_eeprom": {
        "desc": "Property-Description",
        "type": "Value",
        "persistent": true
    },
    "ap.mode": {
        "desc": "Steuermodus",
        "type": "EnumProperty",
        "persistent": true,
        "writable": true,
        "choices": [
            "compass",
            "gps",
            "nav",
            "wind",
            "true wind"
        ]
    },
    "ap.gps_and_nav_modes": {
        "desc": "Property-Description",
        "type": "BooleanProperty",
        "persistent": true,
        "writable": true
    },
    "ap.tack.count": {
        "desc": "Property-Description",
        "type": "ResettableValue",
        "persistent": true,
        "writable": true
    },
    "ap.tack.use_heel": {
        "desc": "Property-Description",
        "type": "BooleanProperty",
        "persistent": true,
        "writable": true
    },
    "ap.tack.use_wind_direction": {
        "desc": "Property-Description",
        "type": "BooleanProperty",
        "persistent": true,
        "writable": true
    },
    "gps.filtered.enabled": {
        "desc": "Property-Description",
        "type": "BooleanProperty",
        "persistent": true,
        "writable": true
    },
    "signalk.period": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "persistent": true,
        "writable": true,
        "min": 0.1,
        "max": 2
    },
    "signalk.uid": {
        "desc": "Property-Description",
        "type": "Value",
        "persistent": true,
        "writable": true
    },
    "servo.period": {
        "desc": "Property-Description",
        "type": "RangeSetting",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0.1,
        "max": 3,
        "units": "sec"
    },
    "servo.speed.min": {
        "desc": "Property-Description",
        "type": "RangeSetting",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 100,
        "units": "%"
    },
    "servo.speed.max": {
        "desc": "Property-Description",
        "type": "RangeSetting",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 100,
        "units": "%"
    },
    "ap.pilot.absolute.P": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 2,
        "AutopilotGain": true
    },
    "ap.pilot.absolute.I": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 0.05,
        "AutopilotGain": true
    },
    "ap.pilot.absolute.D": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 2,
        "AutopilotGain": true
    },
    "ap.pilot.absolute.DD": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 1,
        "AutopilotGain": true
    },
    "ap.pilot.basic.P": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 0.1,
        "AutopilotGain": true
    },
    "ap.pilot.basic.I": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 0.1,
        "AutopilotGain": true
    },
    "ap.pilot.basic.D": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 0.24,
        "AutopilotGain": true
    },
    "ap.pilot.basic.DD": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 0.24,
        "AutopilotGain": true
    },
    "ap.pilot.basic.PR": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 0.02,
        "AutopilotGain": true
    },
    "ap.pilot.basic.FF": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 2.4,
        "AutopilotGain": true
    },
    "ap.pilot": {
        "desc": "Property-Description",
        "type": "EnumProperty",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "choices": [
            "absolute",
            "basic"
        ]
    },
    "ap.tack.delay": {
        "desc": "Property-Description",
        "type": "RangeSetting",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 0,
        "max": 60,
        "units": "sec"
    },
    "ap.tack.angle": {
        "desc": "Property-Description",
        "type": "RangeSetting",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 10,
        "max": 180,
        "units": "deg"
    },
    "ap.tack.rate": {
        "desc": "Property-Description",
        "type": "RangeSetting",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 1,
        "max": 100,
        "units": "deg\/s"
    },
    "ap.tack.threshold": {
        "desc": "Property-Description",
        "type": "RangeSetting",
        "profiled": true,
        "persistent": true,
        "writable": true,
        "min": 10,
        "max": 100,
        "units": "%"
    },
    "gps.filtered.declination": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "gps.filtered.time_offset": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "gps.filtered.compass_offset": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "gps.filtered.fix": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "gps.filtered.speed": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "gps.filtered.track": {
        "desc": "Property-Description",
        "type": "SensorValue",
        "directional": true
    },
    "gps.source": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "wind.source": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "truewind.source": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "rudder.source": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "apb.source": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "water.source": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "imu.frequency": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.alignmentCounter": {
        "desc": "Property-Description",
        "type": "Value",
        "writable": true
    },
    "imu.uptime": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "imu.warning": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "imu.heading_lowpass_constant": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "writable": true,
        "min": 0.05,
        "max": 0.3
    },
    "imu.headingrate_lowpass_constant": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "writable": true,
        "min": 0.05,
        "max": 0.3
    },
    "imu.headingraterate_lowpass_constant": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "writable": true,
        "min": 0.05,
        "max": 0.3
    },
    "imu.accel": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.gyro": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.compass": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.accel.residuals": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.pitch": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.roll": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.pitchrate": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.rollrate": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.headingrate": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.headingraterate": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.heel": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.headingrate_lowpass": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.headingraterate_lowpass": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.heading": {
        "desc": "Property-Description",
        "type": "SensorValue",
        "directional": true
    },
    "imu.heading_lowpass": {
        "desc": "Property-Description",
        "type": "SensorValue",
        "directional": true
    },
    "imu.fusionQPose": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "gps.rate": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "writable": true,
        "min": 0,
        "max": 50
    },
    "gps.track": {
        "desc": "Property-Description",
        "type": "SensorValue",
        "directional": true
    },
    "gps.speed": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "gps.fix": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "gps.leeway_ground": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "gps.compass_error": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "gps.declination": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "gps.alignmentCounter": {
        "desc": "Property-Description",
        "type": "Value",
        "writable": true
    },
    "wind.rate": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "writable": true,
        "min": 0,
        "max": 50
    },
    "wind.direction": {
        "desc": "Property-Description",
        "type": "SensorValue",
        "directional": true
    },
    "wind.speed": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "truewind.rate": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "writable": true,
        "min": 0,
        "max": 50
    },
    "truewind.direction": {
        "desc": "Property-Description",
        "type": "SensorValue",
        "directional": true
    },
    "truewind.speed": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "rudder.rate": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "writable": true,
        "min": 0,
        "max": 50
    },
    "rudder.angle": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "rudder.speed": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "rudder.calibration_state": {
        "desc": "Property-Description",
        "type": "EnumProperty",
        "writable": true,
        "choices": [
            "idle",
            "reset",
            "centered",
            "starboard range",
            "port range",
            "auto gain"
        ]
    },
    "apb.track": {
        "desc": "Property-Description",
        "type": "SensorValue",
        "directional": true
    },
    "apb.xte": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "water.rate": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "writable": true,
        "min": 0,
        "max": 50
    },
    "water.speed": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "water.leeway": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "water.leeway.source": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "water.current.speed": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "water.current.direction": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "water.wind.speed": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "water.wind.direction": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "servo.calibration": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "servo.position_command": {
        "desc": "Property-Description",
        "type": "Value",
        "writable": true
    },
    "servo.command": {
        "desc": "Property-Description",
        "type": "Value",
        "writable": true
    },
    "servo.speed_gain": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "writable": true,
        "min": 0,
        "max": 1
    },
    "servo.duty": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "servo.voltage": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "servo.current": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "servo.current.noise": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "servo.controller_temp": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "servo.motor_temp": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "servo.engaged": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "servo.watts": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "servo.speed": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "servo.position": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "servo.raw_command": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "servo.state": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "servo.controller": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "servo.flags": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "ap.version": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "timestamp": {
        "desc": "Property-Description",
        "type": "TimeStamp"
    },
    "ap.preferred_mode": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "ap.modes": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "ap.heading_command": {
        "desc": "Property-Description",
        "type": "RangeProperty",
        "writable": true,
        "min": -180,
        "max": 360
    },
    "ap.enabled": {
        "desc": "Property-Description",
        "type": "BooleanProperty",
        "writable": true
    },
    "ap.heading": {
        "desc": "Property-Description",
        "type": "SensorValue",
        "directional": true
    },
    "ap.heading_error": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "ap.heading_error_int": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "ap.heading_command_rate": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "ap.pilot.absolute.Pgain": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "ap.pilot.absolute.Igain": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "ap.pilot.absolute.Dgain": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "ap.pilot.absolute.DDgain": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "ap.pilot.basic.Pgain": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "ap.pilot.basic.Igain": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "ap.pilot.basic.Dgain": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "ap.pilot.basic.DDgain": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "ap.pilot.basic.PRgain": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "ap.pilot.basic.FFgain": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "ap.tack.state": {
        "desc": "Property-Description",
        "type": "EnumProperty",
        "writable": true,
        "choices": [
            "none",
            "begin",
            "waiting",
            "tacking"
        ]
    },
    "ap.tack.timeout": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "ap.tack.direction": {
        "desc": "Property-Description",
        "type": "EnumProperty",
        "writable": true,
        "choices": [
            "none",
            "port",
            "starboard"
        ]
    },
    "ap.runtime": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "ap.timings": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.error": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "imu.accel.calibration.age": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "imu.accel.calibration.sigmapoints": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "imu.accel.calibration.log": {
        "desc": "Property-Description",
        "type": "Value",
        "writable": true
    },
    "imu.compass.calibration.age": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "imu.compass.calibration.sigmapoints": {
        "desc": "Property-Description",
        "type": "Value"
    },
    "imu.compass.calibration.log": {
        "desc": "Property-Description",
        "type": "Value",
        "writable": true
    },
    "imu.compass.calibration.field_strength": {
        "desc": "Property-Description",
        "type": "SensorValue"
    },
    "imu.compass.calibration.inclination": {
        "desc": "Property-Description",
        "type": "SensorValue"
    }
}