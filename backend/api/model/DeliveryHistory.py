from settings.settings import *

class DeliveryHistory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    delivery_date = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    status = db.Column(db.String(100), nullable=False)
    package_id = db.Column(db.Integer, db.ForeignKey('package.id'), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __repr__(self):
        return str({
            'delivery_date': self.delivery_date,
            'status': self.status,
            'package_id': self.package_id,
            'user_id': self.user_id,
        })


class DeliveryHistorySchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "delivery_date",
            "status",
            "package_id",
            "user_id",
        )