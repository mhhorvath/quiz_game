from django.http import HttpRequest
from backend.serializers import PlanSerializer
from backend.models import Plan
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
import numpy as np

class PlanView(viewsets.ModelViewSet):
    serializer_class = PlanSerializer
    queryset = Plan.objects.all()
  
  
class ClosestPlan(APIView):
    
    def post(self, request):
        arr = np.array(request.data)
        plans = Plan.objects.all()
        vectors = [np.array(i.arr) for i in plans]
        minarg = 0
        max_sim = -np.inf
        for i in range(len(vectors)):
            similarity = np.dot(arr, vectors[i]) / (np.linalg.norm(arr) * np.linalg.norm(vectors[i]))
            if similarity > max_sim:
                max_sim = similarity
                minarg = i
        print(plans[minarg])
        closest_plan = PlanSerializer(plans[minarg]).data
        return Response({"message": "Got some data!", "data":closest_plan})