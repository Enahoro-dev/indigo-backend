from django.urls import path
from . import views



urlpatterns = [
    path('patients/', views.getPatients, name='patients' ),
    path('records/', views.getRecords, name='records' ),
    path('patient/new/', views.createPatient, name='create-patient' ),
    path('patient/<str:pk>/update/', views.updatePatient, name='update-patient'),
    path('patient/<str:pk>/', views.getPatient, name='patient' ),
    path('search-patient/',views.PatientListView.as_view()),
]