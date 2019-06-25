#include <SPI.h>
#include <stdint.h>
#include <TFTv2.h>


void setup()
{
    TFT_BL_ON;      // turn on the background light
    Tft.TFTinit();  // init TFT library
    Tft.fillScreen(0, 240, 0, 320, BLACK);
}

void loop()
{

    Tft.fillScreen(0, 240, 0, 320, BLACK); // this resets the canvas each refresh
    TextOrientation orientation;
    orientation = LANDSCAPE;
    
    // All Objects will start at 0, height, font size
    Tft.drawString("Network Status", 0, 200, 3, WHITE, orientation);
    Tft.drawString("IP: ", 0, 175, 2, WHITE, orientation);
    Tft.drawString("SQL Server:", 0, 135, 2, WHITE, orientation);
    Tft.drawString("MOWEB Services:", 0, 110, 2, WHITE, orientation);
    Tft.drawString("EC2 Server:", 0, 85, 2, WHITE, orientation);
    Tft.drawString("Lambda Checks:", 0, 60, 2, WHITE, orientation);
    Tft.drawString("Public Website:", 0, 35, 2, WHITE, orientation);
    Tft.drawString("Devices: ", 0, 10, 2, WHITE, orientation);

    // All status will start at 200, height, font size
   
    delay(1800000); // delay 30 minutes for the next refresh
}


