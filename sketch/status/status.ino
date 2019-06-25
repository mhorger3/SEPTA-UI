/* drawString example sketch: display strings all over the place */

#include <SPI.h>
#include <stdint.h>
#include <TFTv2.h>

void setup()
{
    TFT_BL_ON;      // turn on the background light
    Tft.TFTinit();  // init TFT library
    Tft.fillScreen(0, 240, 0, 320, BLACK);
    TextOrientation orientation;
    orientation = LANDSCAPE;
    Tft.drawString("SQL Server:", 0, 0, 2, WHITE, orientation);
    Tft.drawString("Active", 150, 0, 2, GREEN, orientation);
}

void loop()
{
  
}
