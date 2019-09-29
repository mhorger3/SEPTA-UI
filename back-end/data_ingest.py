import os
import requests
import json



def get_data_for_epoc(epoc):
    requests.get(f'https://api.darksky.net/forecast/4c6ed4cf490531031ccd759d722b2035/42.3601,-71.0589,{epoc}').text
    j = json.loads()
