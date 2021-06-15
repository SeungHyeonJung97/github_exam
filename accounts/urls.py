from . import views
from django.urls import path
from django.contrib.auth import views as auth_views  # 장고가 제공하는 로그인 인증관련 패키지

app_name = 'accounts'

urlpatterns = [
    path('login/', auth_views.LoginView.as_view(template_name='accounts/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('signup/', views.signup, name='signup'),
]
