from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse  # 페이지 요청에 대한 응답 표시할 때 사용하는 클래스

# Create your views here.
from .models import Question
from django.utils import timezone
from .forms import QuestionForm, AnswerForm  # 장고 폼을 상속받아서 사용자 폼을 생성
from django.core.paginator import Paginator
from django.contrib.auth.decorators import login_required


def index(request):
    # return HttpResponse("안녕하세요 combot에 오신것을 환영합니다.")
    """
    질문(게시글) 목록 출력
    """

    question_list = Question.objects.order_by('-create_date')  # question 테이블의 모든 레코드를 날짜 역순으로 조회
    # html 파일로 전송하기 위해 context 생성(딕셔너리 형태)
    context = {'question_list': question_list}
    return render(request, 'board/question_list.html', context)


def detail(request, question_id):
    """
    게시글 내용 출력
    """
    # question = Question.objects.get(id=question_id)
    question = get_object_or_404(Question, pk=question_id)  # pk가 없으면 db 오류대신 404 오류를 반환
    context = {'question': question}
    return render(request, 'board/question_detail.html', context)


@login_required(login_url='accounts:login')
def answer_create(request, question_id):
    """
    게시글 답변 등록
    """
    question = get_object_or_404(Question, pk=question_id)
    if request.method == "POST":
        form = AnswerForm(request.POST)
        if form.is_valid():
            answer = form.save(commit=False)
            answer.author = request.user  # 추가한 속성 author 적용
            answer.create_date = timezone.now()
            answer.question = question
            answer.save()
            return redirect('board:detail', question_id=question.id)
    else:
        form = AnswerForm()
    context = {'question': question, 'form': form}
    return render(request, 'board/question_detail.html', context)
    # question.answer_set.create(content=request.POST.get('content'), create_date=timezone.now())
    # return redirect('combot:detail', question_id=question.id)


@login_required(login_url='accounts:login')
def question_create(request):
    """
    질문등록
    """
    # form = QuestionForm()
    # return render(request, 'combot/question_form.html', {'form': form})
    if request.method == "POST":
        form = QuestionForm(request.POST)
        if form.is_valid():
            question = form.save(commit=False)  # db에 넣은 form데이터를 갖고 옴
            question.author = request.user  # 추가한 속성 author 적용
            question.create_date = timezone.now()
            question.save()
            return redirect('/board')
    else:
        form = QuestionForm()
    context = {'form': form}
    return render(request, 'board/question_form.html', context)
