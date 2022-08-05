from django.shortcuts import render

# Create your views here.

from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Patient,Record
from .serializers import PatientSerializer,RecordSerializer
from rest_framework import filters, generics

# Create your views here.

class PatientListView(generics.ListAPIView):
    queryset=Patient.objects.all()
    serializer_class = PatientSerializer
    filter_backends =[filters.SearchFilter]
    search_fields=['last_name','first_name']
    

@api_view(['GET'])
def getPatients(request):
    patients= Patient.objects.all().order_by('-updated_at')
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getRecords(request):
    records= Record.objects.all().order_by('-updated_at')
    serializer = RecordSerializer(records, many=True)
    return Response(serializer.data)    

@api_view(['GET'])
def getPatient(request, pk):
    patients= Patient.objects.get(id=pk)
    serializer = PatientSerializer(patients, many=False)
    return Response(serializer.data)   

@api_view(['POST'])
def createPatient(request):
    data = request.data
    serializer = PatientSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)    

@api_view(['PUT'])  
def updatePatient(request, pk):
    data = request.data
    patient_data= Patient.objects.get(id=pk)
    serializer = PatientSerializer(patient_data, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)




