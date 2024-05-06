from settings.settings import *
from model.Subscription import Subscription

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String, nullable=True)
    password = db.Column(db.String, nullable=True)
    subscriptions = db.relationship('Subscription', backref='user', lazy=True)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def __repr__(self):
        return str({
            'email': self.email,
            'password': self.password,
        })


class UserSchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "email",
            "password",
        )


def create_default_users():
    if User.query.count() == 0:
        default_users = [
            {'email': 'admin@example.com', 'password': 'admin', 'subscription_plan': 'Premium'},
            {'email': 'user@example.com', 'password': 'user', 'subscription_plan': 'Basic'}
        ]
        for user_data in default_users:
            user = User(email=user_data['email'])
            user.set_password(user_data['password'])
            subscription = Subscription(subscription_plan=user_data['subscription_plan'])
            user.subscriptions.append(subscription)
            db.session.add(user)
        db.session.commit()