from rest_framework import serializers
from .models import Patient,Record


class RecordSerializer(serializers.ModelSerializer):

    class Meta:
        model = Record
        fields = '__all__'

class PatientSerializer(serializers.ModelSerializer):
    patient_record = RecordSerializer(many=True)

    class Meta:
        model = Patient
        fields = '__all__'

    def create(self, validated_data):
        patient_record = validated_data.pop('patient_record')
        profile_instance = Patient.objects.create(**validated_data)
        for record in patient_record:
            Record.objects.create(patient=profile_instance,**record)
        return profile_instance

    def update(self, instance, validated_data):
        patient_record_list = validated_data.pop('patient_record')
        instance.first_name = validated_data.get('first_name', instance.first_name)
        instance.last_name = validated_data.get('last_name', instance.last_name)
        instance.sex = validated_data.get('sex', instance.sex)
        instance.patient_number = validated_data.get('patient_number', instance.patient_number)
        instance.address = validated_data.get('address', instance.address)
        instance.age = validated_data.get('age', instance.age)
        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.save()

        records_with_same_patient_instance = Record.objects.filter(patient=instance.pk).values_list('id', flat=True)

        record_id_pool = []

        for record in patient_record_list:
            
            if "id" in record.keys():
                if Record.objects.filter(id=record['id']).exists():
                    record_instance = Record.objects.get(id=record['id'])
                    record_instance.note = record.get('note', record_instance.name)
                    record_instance.save()
                    record_id_pool.append(record_instance.id)
                else:
                    continue

            else:
                record_instance = Record.objects.create(patient=instance, **record)
                record_id_pool.append(record_instance.id)
            

        for record_id in records_with_same_patient_instance:
            if record_id not in record_id_pool:
                Record.objects.filter(pk=record_id).delete()

        return instance