from django import forms
from board.models import Question, Answer


class QuestionForm(forms.ModelForm):
    class Meta:
        model = Question
        fields = ['subject', 'content']
        labels = {
            'subject': '제목',
            'content': '내용',
        }


# 장고 폼은 사실 2개의 폼으로 구분할 수 있는데, forms.Form을 상속받으면 폼, forms.ModelForm을 상속 받으면 모델 폼이라 부른다.
# 여기서는 form.ModelForm을 상속받아 모델 폼을 만들었다. 모델 폼은 말 그대로 모델과 연결된 폼이며,
# 모델 폼 객체를 저장하면 연결된 모델의 데이터를 저장할 수 있다.
# 아직 모델 폼 객체를 저장한다는 의미가 잘 이해되지는 않겠지만, 곧 질문 등록 기능을 완성하며 이 내용을 자세히 설명하겠다.
# 내부 클래스로 선언한 Meta 클래스가 눈에 띌 것이다. 장고 모델 폼은 내부 클래스로 Meta 클래스를 반드시 가져야 하며,
# Meta 클래스에는 모델 폼이 사용할 모델과 모델의 필드들을 적어야 한다.
# QuestionForm 클래스는 Question 모델과 연결되어 있으며, 필드로 subject, content를 사용한다고 정의햇다.
class AnswerForm(forms.ModelForm):
    class Meta:
        model = Answer
        fields = ['content']
        labels = {
            'content': '답변 내용',
        }
