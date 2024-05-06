from settings.settings import *
from model.Package import Package, PackageSchema

package_schema = PackageSchema()
packages_schema = PackageSchema(many=True)

class PackagesController(Resource):
    def get(self):
        package = Package.query.all()
        return jsonify(data=packages_schema.dump(package), status=200)

    def post(self):
        request_data = request.get_json()
        content = request_data.get('content')
        category_id = request_data.get('category_id')
        new_package = Package(content=content, category_id=category_id)
        db.session.add(new_package)
        db.session.commit()
        return jsonify(data=package_schema.dump(new_package), status=201)


class PackageController(Resource):
    def get(self, id):
        package = Package.query.get_or_404(id)
        return jsonify(data=package_schema.dump(package), status=200)

    def put(self, id):
        package = Package.query.get_or_404(id)
        request_data = request.get_json()
        package.content = request_data.get('content', package.content)
        package.category_id = request_data.get('category_id', package.category_id)
        db.session.commit()
        return jsonify(data=package_schema.dump(package), status=200)

    def delete(self, id):
        package = Package.query.get_or_404(id)
        db.session.delete(package)
        db.session.commit()
        return jsonify(message='Package deleted', status=200)