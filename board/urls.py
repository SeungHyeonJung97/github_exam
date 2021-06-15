from django.urls import path
from . import views

app_name = 'board'  # 네임 스페이스 등록
urlpatterns = [
    path('', views.index, name='index'),  # 서버주소/combot
    path('<int:question_id>/', views.detail, name='detail'),  # 서버주소/combot/1(질문id)
    path('answer/create/<int:question_id>', views.answer_create, name='answer_create'),
    path('question/create/', views.question_create, name='question_create'),
]