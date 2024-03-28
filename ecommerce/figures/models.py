from django.db import models

class Donation(models.Model):
    name = models.CharField(max_length=100)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    hide_name = models.BooleanField()
    hide_amount = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Donation {self.name} - ${self.amount}"
