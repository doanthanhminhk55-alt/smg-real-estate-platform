from django.db import models

class RentalApplication(models.Model):
    viewing = models.OneToOneField("viewings.Viewing", on_delete=models.CASCADE)
    cover_letter = models.TextField()
    document = models.FileField(upload_to="applications/")
    status = models.CharField(max_length=20, default="submitted")

