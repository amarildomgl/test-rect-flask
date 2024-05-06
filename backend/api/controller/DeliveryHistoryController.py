from settings.settings import *
from model.DeliveryHistory import DeliveryHistory, DeliveryHistorySchema

delivery_history_schema = DeliveryHistorySchema()
delivery_histories_schema = DeliveryHistorySchema(many=True)


class DeliveryHistoryController(Resource):
    def get(self, id):
        delivery_history = DeliveryHistory.query.get_or_404(id)
        return jsonify(data=delivery_history_schema.dump(delivery_history), status=200)


class DeliverysHistoryController(Resource):
    def get(self):
        delivery_history = DeliveryHistory.query.all()
        return jsonify(data=delivery_histories_schema.dump(delivery_history), status=200)

    def post(self):
        request_data = request.get_json()
        package_id = request_data.get('package_id')
        user_id = request_data.get('user_id')
        status = request_data.get('status')
        new_delivery_history = DeliveryHistory(package_id=package_id, user_id=user_id, status=status)
        db.session