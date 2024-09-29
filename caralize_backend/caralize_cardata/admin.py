from django.contrib import admin
from .models import CarManufacturer

@admin.register(CarManufacturer)
class CarManufacturerAdmin(admin.ModelAdmin):
    list_display = ('company_name', 'last_updated', 'website') 
    search_fields = ('company_name',)  
    list_filter = ('last_updated',)  
