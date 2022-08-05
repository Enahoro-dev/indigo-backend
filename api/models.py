from django.db import models

# Create your models here.

class Patient(models.Model):
    first_name = models.CharField(max_length=30)
    last_name = models.CharField(max_length=30)
    sex = models.CharField(max_length=30)
    patient_number = models.IntegerField()
    age = models.IntegerField()
    address = models.TextField()
    phone_number =  models.CharField(max_length=15)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class Record(models.Model):   
    patient=models.ForeignKey(Patient ,on_delete=models.CASCADE,related_name='patient_record',null=True,blank=True)
    note = models.TextField(null=True,blank=True)
    date = models.DateField(auto_now_add=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)