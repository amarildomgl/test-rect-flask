from settings.settings import *

class Subscription(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    subscription_plan = db.Column(db.String, nullable=False)
    start_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    end_date = db.Column(db.DateTime, nullable=True)

    def __repr__(self):
        return str({
            'user_id': self.user_id,
            'subscription_plan': self.subscription_plan,
            'start_date': self.start_date,
            'end_date': self.end_date,
        })

class SubscriptionSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "user_id",
            "subscription_plan",
            "start_date",
            "end_date",
        )
