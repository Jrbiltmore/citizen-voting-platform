// Sensor driver for IoT devices in the Citizen Voting Platform

#include <Wire.h>

#define SENSOR_ADDRESS 0x40

void setupSensor() {
    Wire.begin();
    Wire.beginTransmission(SENSOR_ADDRESS);
    Wire.write(0xF3);
    Wire.endTransmission();
    delay(500);
}

float readSensorData() {
    Wire.requestFrom(SENSOR_ADDRESS, 2);
    if (Wire.available() == 2) {
        int data = Wire.read() << 8 | Wire.read();
        float temperature = data * 0.00268127 - 46.85;  // Example conversion
        return temperature;
    }
    return -1000;  // Error value
}
