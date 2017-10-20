from __future__ import unicode_literals
from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect, JsonResponse
from .models import Question
from django.contrib.auth import logout
from django.contrib.auth.models import User
import json
from django.contrib.auth import get_user_model
User = get_user_model()


def main(request):
    if (request.user.is_authenticated()):
        leaderboard = User.objects.order_by('score').reverse()
        user = request.user
        i = 0

        for player in leaderboard:
            if user.score == player.score:
                user.rank = i + 1
                user.save()
            else:
                i += 1

        return render(request, 'index.html/',
                      {'user': user.username, 'score': user.score, 'rank': user.rank, 'leaderboard': leaderboard})
    else:
        return render(request, 'front.html/')


def logout_view(request):
    logout(request)
    return HttpResponseRedirect(
        'https://www.google.com/accounts/Logout?continue=https://appengine.google.com/_ah/logout?continue=http://127.0.0.1:8000')


def answer(request, number):
    if request.user.is_authenticated():
        user = request.user
        user.save()

        if number == '1':
            product = Question.objects.get(question_type='football', question_no=user.question_no1)
            qsno = user.question_no1
            no = 1
        elif number == '2':
            product = Question.objects.get(question_type='cricket', question_no=user.question_no2)
            qsno = user.question_no2
            no = 2
        elif number == '3':
            product = Question.objects.get(question_type='miscellaneous', question_no=user.question_no3)
            qsno = user.question_no3
            no = 3
        elif number == '4':
            product = Question.objects.get(question_type='track&field', question_no=user.question_no4)
            qsno = user.question_no
            no = 4
        elif number == '5':
            product = Question.objects.get(question_type='extras', question_no=user.question_no5)
            qsno = user.question_no5
            no = 5

        answerof = request.GET.get('answerof')

        if answerof == product.solution:
            list1 = list(user.answers_given)
            list1[30 * (no - 1) + qsno] = '1'
            user.answers_given = ''.join(list1)
            user.score += 100
            if number == '1':
                user.question_no1 += 1
            elif number == '2':
                user.question_no2 += 1
            elif number == '3':
                user.question_no3 += 1
            elif number == '4':
                user.question_no4 += 1
            elif number == '5':
                user.question_no5 += 1
            user.save()
            error = False
        else:
            list1 = list(user.answers_given)
            list1[30 * (no - 1) + qsno] = '3'
            user.answers_given = ''.join(list1)
            user.save()
            return HttpResponseRedirect('/accounts/profile/%s/' % number)

        # user.score = 100 *user.answers_given.count('1')-25*user.answers_given.count('2')

        leaderboard = User.objects.order_by('score').reverse()
        i = 0

        for player in leaderboard:
            if user.score == player.score:
                user.rank = i + 1
                user.save()
            else:
                i += 1

        user.save()
        return HttpResponseRedirect('/accounts/profile/%s/' % number)
    else:
        return HttpResponseRedirect('/')


def detail(request, number):
    if request.user.is_authenticated():
        error = False
        u = request.user

        if number == '1':
            product = Question.objects.get(question_type="football", question_no=u.question_no1)
            qsno = u.question_no1
            no = 1
            left = 5
        elif number == '2':
            product = Question.objects.get(question_type="cricket", question_no=u.question_no2)
            qsno = u.question_no2
            no = 2
            left = 5
        elif number == '3':
            product = Question.objects.get(question_type="miscellaneous", question_no=u.question_no3)
            qsno = u.question_no3
            no = 3
            left = 5
        elif number == '4':
            product = Question.objects.get(question_type="track&field", question_no=u.question_no4)
            qsno = u.question_no
            no = 4
            left = 5
        elif number == '5':
            product = Question.objects.get(question_type="extras", question_no=u.question_no5)
            qsno = u.question_no5
            no = 5
            left = 5
        s = 3 - u.answers_given.count('2')
        u.save()
        qsleft = left - product.question_no + 1
        resp = {'score': u.score, 'hinttext': product.question, 'skip': s, 'djangoNoofQuestionsLeft': qsleft,
                'qsno': qsno, 'djangoImage': product.question_img.url}

        return JsonResponse(resp)
    else:
        return HttpResponseRedirect('/')


def skip(request, number):
    if request.user.is_authenticated():
        u = request.user
        u.score -= 25
        if number == '1':
            product = Question.objects.get(question_type='football', question_no=u.question_no1)
            qsno = u.question_no1
            no = 1
        elif number == '2':
            product = Question.objects.get(question_type='cricket', question_no=u.question_no2)
            qsno = u.question_no2
            no = 2
        elif number == '3':
            product = Question.objects.get(question_type='miscellaneous', question_no=u.question_no3)
            qsno = u.question_no3
            no = 3
        elif number == '4':
            product = Question.objects.get(question_type='track&field', question_no=u.question_no4)
            qsno = u.question_no
            no = 4
        elif number == '5':
            product = Question.objects.get(question_type='extras', question_no=u.question_no5)
            qsno = u.question_no5
            no = 5

        s = u.answers_given.count('2')

        if s < 3:
            list1 = list(u.answers_given)
            list1[30 * (no - 1) + qsno] = '2'
            u.answers_given = ''.join(list1)
            if number == '1':
                u.question_no1 += 1
            elif number == '2':
                u.question_no2 += 1
            elif number == '3':
                u.question_no3 += 1
            elif number == '4':
                u.question_no4 += 1
            elif number == '5':
                u.question_no5 += 1
            u.save()

            leaderboard = User.objects.order_by('score').reverse()
            i = 0

            for player in leaderboard:
                if u.score == player.score:
                    u.rank = i + 1
                    u.save()
                else:
                    i += 1

            u.save()
            return HttpResponseRedirect('/accounts/profile/%s/' % number)

        else:
            return HttpResponseRedirect('/accounts/profile/%s/' % number)
    else:
        return HttpResponseRedirect('/')


def leave(request, number):
    if request.user.is_authenticated():
        u = request.user
        if number == '1':
            product = Question.objects.get(question_type='football', question_no=u.question_no1)
            qsno = u.question_no1
            no = 1
        elif number == '2':
            product = Question.objects.get(question_type='cricket', question_no=u.question_no2)
            qsno = u.question_no2
            no = 2
        elif number == '3':
            product = Question.objects.get(question_type='miscellaneous', question_no=u.question_no3)
            qsno = u.question_no3
            no = 3
        elif number == '4':
            product = Question.objects.get(question_type='track&field', question_no=u.question_no4)
            qsno = u.question_no
            no = 4
        elif number == '5':
            product = Question.objects.get(question_type='extras', question_no=u.question_no5)
            qsno = u.question_no5
            no = 5
        score = u.score - 50
        u.score = score
        leaderboard = User.objects.order_by('score').reverse()
        i = 0

        for player in leaderboard:
            if u.score == player.score:
                u.rank = i + 1
                u.save()
            else:
                i += 1
        u.save()
        resp = {'score': u.score}

        return HttpResponse(json.dumps(resp), content_type='application/json')
    else:
        return HttpResponseRedirect('/')


def leaderboard(request):
    if request.user.is_authenticated():
        leaderboard = User.objects.order_by('score').reverse()
        username = ["" for x in range(10)]
        score = [0 for i in range(10)]
        for i in range(10):
            username[i] = leaderboard[i].username
            score[i] = leaderboard[i].score

        resp = {'username': username, 'rank': request.user.rank, 'score': score}

        return HttpResponse(json.dumps(resp), content_type='application/json')
    else:
        return HttpResponseRedirect('/')
