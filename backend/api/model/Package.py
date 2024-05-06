from settings.settings import *

class Package(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(255), nullable=False)
    category = db.Column(db.String(100), nullable=False)
    subscription_id = db.Column(db.Integer, db.ForeignKey('subscription.id'), nullable=False)

    def __repr__(self):
        return str({
            'content': self.email,
            'category': self.category,
            'subscription_id': self.subscription_id,
        })

class PackageSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "content",
            "category",
            "subscription_id",
        )