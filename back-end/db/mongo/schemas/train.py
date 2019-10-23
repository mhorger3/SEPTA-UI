from mongoengine import Document, FloatField, IntField, StringField, DateTimeField


class Train(Document):
    def __init__(self):
        datetime = DateTimeField(required=True)
        lat = FloatField(required=True)
        lng = FloatField(required=True)
        num = IntField(required=True)
