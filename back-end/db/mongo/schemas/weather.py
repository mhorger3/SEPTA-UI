from mongoengine import Document, ObjectIdField, StringField, IntField, FloatField, DateTimeField


class Weather(Document):
    def __init__(self):
        date_time = DateTimeField(required=True)
        precip_rate = FloatField(required=True)
        temp = FloatField(required=True)
        lat = FloatField(required=True)
        lng = FloatField(required=True)
        city = StringField(required=True)
