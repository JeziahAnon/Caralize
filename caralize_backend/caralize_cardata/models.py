from django.db import models
from django.db.models import CharField, DateField, DateTimeField, FloatField, ForeignKey, IntegerField, URLField

class CarManufacturer(models.Model):
    company_name: CharField = models.CharField(max_length=50, unique=True)
    last_updated: DateTimeField = models.DateTimeField(auto_now_add=True)
    website: URLField = models.URLField(blank=True, null=True, unique=True)
    
    @classmethod
    def create_car_manufacturer(cls, company_name: str, website: str) -> 'CarManufacturer':
        if company_name and website:
            try: 
                car_manufacturer: CarManufacturer = cls.objects.create(
                        company_name=company_name,
                        website=website
                ) 
                return car_manufacturer
            except Exception as e:
                print(f'An error is occured while creating a carmanufacturer object: {e}')
        else:
            raise ValueError('Could not create: company name or website is missing.')

    def __str__(self) -> str:
        return self.company_name
    
class CarModel(models.Model):
    name: CharField = models.CharField(max_length=50)
    manufacturer: ForeignKey = models.ForeignKey('CarManufacturer', related_name='Carmodel', on_delete=models.CASCADE)
    year: CharField = models.DateField(null=True, blank=True)
    car_type: CharField = models.CharField(max_length=10, null=True, blank=True)
    engine: CharField = models.CharField(max_length=150, null=True, blank=True)
    horsepower: IntegerField = models.IntegerField(null=True, blank=True)
    torque: IntegerField = models.IntegerField(null=True, blank=True)
    fuel_economy: FloatField = models.FloatField(null=True, blank=True)
    safety_rating: FloatField = models.FloatField(null=True, blank=True)
    price: FloatField = models.FloatField(null=True,  blank=True)
    
    
    def __str__(self) -> str:
        return f"{self.name} ({self.year})"
    
class SalesStatistics(models.Model):
    car: ForeignKey = models.ForeignKey(CarModel, on_delete=models.CASCADE)
    year: IntegerField = models.IntegerField()
    units_sold: IntegerField = models.IntegerField()
    market_region: CharField = models.CharField(max_length=50)  
    average_price: FloatField = models.FloatField()  
    
    def __str__(self):
        return f"{self.car.name} - {self.year}: {self.units_sold} units sold"

class PriceHistory(models.Model):
    car: ForeignKey = models.ForeignKey(CarModel, on_delete=models.CASCADE)
    date: DateField = models.DateField()
    price: FloatField = models.FloatField() 
    source: CharField = models.CharField(max_length=100)  
    
    def __str__(self):
        return f"{self.car.name} on {self.date}: ${self.price}"
