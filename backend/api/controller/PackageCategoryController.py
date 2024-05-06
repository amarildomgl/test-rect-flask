from settings.settings import *
from model.PackageCategory import PackageCategory, PackageCategorySchema

package_category_schema = PackageCategorySchema()
package_categories_schema = PackageCategorySchema(many=True)

class PackagesCategoryController(Resource):
    def get(self):
        package_category = PackageCategory.query.all()
        return jsonify(data=package_categories_schema.dump(package_category), status=200)

    def post(self):
        request_data = request.get_json()
        name = request_data.get('name')
        new_package_category = PackageCategory(name=name)
        db.session.add(new_package_category)
        db.session.commit()
        return jsonify(data=package_category_schema.dump(new_package_category), status=201)

class PackageCategoryController(Resource):
    def get(self, id):
        package_category = PackageCategory.query.get_or_404(id)
        return jsonify(data=package_category_schema.dump(package_category), status=200)


    def put(self, id):
        package_category = PackageCategory.query.get_or_404(id)
        request_data = request.get_json()
        package_category.name = request_data.get('name', package_category.name)
        db.session.commit()
        return jsonify(data=package_category_schema.dump(package_category), status=200)

    def delete(self, id):
        package_category = PackageCategory.query.get_or_404(id)
        db.session.delete(package_category)
        db.session.commit()
        return jsonify(message='Package category deleted', status=200)
