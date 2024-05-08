from settings.settings import *
from model.User import User, UserSchema

user_schema = UserSchema()
users_schema = UserSchema(many=True)


class Login(Resource):
    def post(self):
        request_data = request.get_json()
        email = str(request_data['email'])
        password = str(request_data['password'])

        if email is None or password is None:
            return jsonify(message="Digite o email e a senha, por favor", status=404)

        user = User.query.filter_by(email=email).first()
        if user is None or not user.check_password(password):
            return jsonify(data=None, message="Credenciais inválidas", status=404)

        return jsonify(data=user_schema.dump(user), status=200, message='Success')


class CreateUser(Resource):
    def post(self):
        request_data = request.get_json()
        email = request_data['email']
        password = request_data['password']

        if not email or not password:
            return jsonify(message="Todos os campos são obrigatórios", status=400)

        if User.query.filter_by(email=email).first() is not None:
            return jsonify(message="Email já está em uso", status=400)

        user = User(email=email)
        user.set_password(password)
        db.session.add(user)
        db.session.commit()

        return jsonify(data=user_schema.dump(user), status=200, message='Success')

    def get(self):
        users = User.query.all()
        user_data = []
        for user in users:
            user_info = user_schema.dump(user)
            subscriptions_info = []
            for subscription in user.subscriptions:
                subscriptions_info.append({
                    'id': subscription.id,
                    'subscription_plan': subscription.subscription_plan,
                    'start_date': subscription.start_date,
                    'end_date': subscription.end_date
                })
            user_info['subscriptions'] = subscriptions_info
            user_data.append(user_info)
        return jsonify(data=user_data, status=200)


class UserController(Resource):
    def get(self, id):
        user = User.query.get_or_404(id)
        user_data = user_schema.dump(user)
        subscriptions_data = []
        for subscription in user.subscriptions:
            subscription_data = {
                'id': subscription.id,
                'subscription_plan': subscription.subscription_plan,
                'start_date': subscription.start_date,
                'end_date': subscription.end_date
            }
            subscriptions_data.append(subscription_data)
        user_data['subscriptions'] = subscriptions_data
        response_data = {'user': user_data}
        return jsonify(data=response_data, status=200, message='Success')

    def patch(self, id):
        u = User.query.get_or_404(id)
        if 'email' in request.json:
            u.email = request.json['email']
        if 'password' in request.json:
            u.set_password = request.json['password']
        db.session.commit()
        return jsonify(data=user_schema.dump(u), status=200)
