import datetime
import json

import requests
from loguru import logger


@logger.catch
def get_data_for_epoch(epoch, lat, lng, key):
    res = requests.get(f'https://api.darksky.net/forecast/{key}/{lat},{lng},{epoch}')
    if res.status_code != 200:
        logger.error('Error code: {}, Response: {}', res.status_code, res.text)
        return None

    logger.info('Success for lat: {}, lng: {}, epoch_time: {}', lat, lng, epoch)

    string = res.text
    j = json.loads(string)
    hourly = j.get('hourly').get('data')

    return hourly


key = '4c6ed4cf490531031ccd759d722b2035'

dt = int(datetime.datetime.now().timestamp())
lat, lng = 42.3601, -71.0589

hourly = get_data_for_epoch(dt, lat, lng, key)

for hour in hourly:
    dt = datetime.datetime.fromtimestamp(hour.get('time'))
    month = dt.month
    day = dt.day
    hour = dt.hour
    year = dt.year
    dow = dt.weekday

    logger.info(year, month, day, dow, hour)
