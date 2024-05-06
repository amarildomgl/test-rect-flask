from settings.settings import *
from controller.SubscriptionController import *
from controller.UserController import *
from controller.PackageCategoryController import *
from controller.PackageController import *
from controller.DeliveryHistoryController import *

from model.User import create_default_users
from model.PackageCategory import  create_default_packages

#delivery routes
api.add_resource(DeliveryHistoryController, '/delivery/<int:id>')
api.add_resource(DeliverysHistoryController, '/delivery')

# PACKAGES ROUTES
api.add_resource(PackageController, '/package/<int:id>')
api.add_resource(PackagesController, '/package')


api.add_resource(PackageCategoryController, '/package/category/<int:id>')
api.add_resource(PackagesCategoryController, '/category')

# SUBSCRIPTION ROUTES
api.add_resource(CreateSubscription, '/subscription')
api.add_resource(SubscriptionController, '/subscription/<int:id>')

# USER ROUTES
api.add_resource(Login, '/login')
api.add_resource(CreateUser, '/user')
api.add_resource(UserController, '/user/<int:id>')

# STATIC ROUTE

@app.route('/<path:path>')
def root(path):
    return app.send_static_file(path)

@app.route('/')
def test():
    return "API IS ON!"


# MAIN PROJECT ROUTE
if __name__ == '__main__':
    app.app_context().push()
    db.create_all()
    create_default_users()
    create_default_packages()
    app.run(debug=True)
