import mongoengine
import os
import datetime

from loguru import logger
from .mongo.schemas.weather import Weather
from .mongo.schemas.train import Train
from motor.motor_tornado import MotorClient

# client = mongoengine.connect(os.environ.get("MONGO_URI"))
client = MotorClient(os.environ.get("MONGO_URI"))


def get_client():
    return client


logger.info(client)


@logger.catch
def create_weather_entry(city: str, temp: float, lat: float, lng: float, date_time: int, precip_rate: float) -> Weather:
    return Weather(
        city=city,
        temp=temp,
        lat=lat,
        lng=lng,
        date_time=datetime.datetime(date_time),
        precip_rate=precip_rate
    )


@logger.catch
def upload_weather_entries(entries: list):
    Weather.objects.insert(entries)
    logger.info('Upload Weather entries was successful')
