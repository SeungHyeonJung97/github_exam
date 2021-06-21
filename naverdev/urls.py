from django.urls import path
from naverdev import views

app_name = 'naverdev' # url 패턴의 충돌을 방지하기 위한 이름
urlpatterns = [
    path('', views.index, name='index'),
]
