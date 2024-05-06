from settings.settings import *
from model.Subscription import Subscription, SubscriptionSchema

subscription_schema = SubscriptionSchema()
subscriptions_schema = SubscriptionSchema(many=True)


class CreateSubscription(Resource):
    def post(self):
        request_data = request.get_json()
        user_id = request_data['user_id']
        subscription_plan = request_data['subscription_plan']

        if not user_id or not subscription_plan:
            return jsonify(message="Todos os campos são obrigatórios", status=400)

        if User.query.get(user_id) is None:
            return jsonify(message="Usuário não encontrado", status=404)

        subscription = Subscription(user_id=user_id, subscription_plan=subscription_plan)
        db.session.add(subscription)
        db.session.commit()

        return jsonify(data=subscription_schema.dump(subscription), status=201)

    def get(self):
        subscriptions = Subscription.query.all()
        return jsonify(data=subscriptions_schema.dump(subscriptions), status=200)


class SubscriptionController(Resource):
    def get(self, id):
        subscription = Subscription.query.get_or_404(id)
        response_data = {
            'subscription': subscription_schema.dump(subscription),
        }
        return jsonify(data=response_data, status=200, message='Success')

    def patch(self, id):
        subscription = Subscription.query.get_or_404(id)
        request_data = request.get_json()
        if 'subscription_plan' in request_data:
            subscription.subscription_plan = request_data['subscription_plan']
        db.session.commit()
        return jsonify(data=subscription_schema.dump(subscription), status=200)

    def delete(self, id):
        subscription = Subscription.query.get_or_404(id)
        db.session.delete(subscription)
        db.session.commit()
        return jsonify(message='Subscription deleted', status=200)