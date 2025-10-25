from  django.db import models
import numpy as np


class Plan(models.Model):
    name = models.CharField(max_length=255, unique=True)
    description = models.CharField(max_length=1024)
    image = models.ImageField(null=True)
    arr = models.JSONField(default=list)