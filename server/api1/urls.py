from rest_framework.routers import SimpleRouter
from .views import EmployeeViewSet

router1 = SimpleRouter()
router1.register('employee', EmployeeViewSet)


