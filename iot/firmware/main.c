// Firmware for IoT devices for the Citizen Voting Platform

#include <Arduino.h>
#include <WiFi.h>
#include <HTTPClient.h>

const char* ssid = "your_SSID";
const char* password = "your_PASSWORD";
const char* serverName = "http://yourserver.com/api/health";

void setup() {
    Serial.begin(115200);
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }

    Serial.println("Connected to WiFi");
}

void loop() {
    if ((WiFi.status() == WL_CONNECTED)) {
        HTTPClient http;
        http.begin(serverName);

        int httpResponseCode = http.GET();

        if (httpResponseCode > 0) {
            String response = http.getString();
            Serial.println(httpResponseCode);
            Serial.println(response);
        }
        else {
            Serial.print("Error on sending GET: ");
            Serial.println(httpResponseCode);
        }

        http.end();
    }

    delay(10000);
}
