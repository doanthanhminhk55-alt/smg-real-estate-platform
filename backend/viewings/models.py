from django.db import models

class Viewing(models.Model):
    listing = models.ForeignKey("listings.Listing", on_delete=models.CASCADE)
    tenant = models.ForeignKey("users.User", on_delete=models.CASCADE)
    scheduled_at = models.DateTimeField()
    status = models.CharField(max_length=20, default="pending")

