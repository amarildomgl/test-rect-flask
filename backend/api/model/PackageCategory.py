from settings.settings import *

class PackageCategory(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), unique=True, nullable=False)

    def __repr__(self):
        return str({
            'name': self.name,
        })


class PackageCategorySchema(ma.Schema):
    class Meta:
        fields = (
            "id",
            "name",
        )


def create_default_packages():
    if PackageCategory.query.count() == 0:
        datas = [
            {'name': 'Brinquedos'},
            {'name': 'Roupas'},
            {'name': 'Eletrónicos'},
            {'name': 'Acessórios'},
            {'name': 'Utilitários'}
        ]
        for data in datas:
            p = PackageCategory(name=data['name'])
            db.session.add(p)
        db.session.commit()