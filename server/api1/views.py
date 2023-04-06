from rest_framework import viewsets, permissions
from .serializers import EmployeeSerializers
from .models import Employee

class EmployeeViewSet(viewsets.ModelViewSet):
    queryset = Employee.objects.all()
    serializer_class = EmployeeSerializers
    permission_classes = [permissions.AllowAny]


