av=[1,1,1,1,1] ; // availabilty of questions for each stadium 1:available 0:not available
left=[0.125,0.31,0.52,0.72,0.92];  // left constraint for popup visibility
right=[0.16,0.36,0.56,0.77,0.97];  // right constraint for popup visibility
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))
{
    left=[0.125,0.31,0.505,0.705,0.89];
    right=[0.16,0.35,0.54,0.74,0.92];
    document.getElementsByClassName("stad1")[0].style.left="2050px";
    document.getElementsByClassName("stad2")[0].style.left="4000px";
    document.getElementsByClassName("stad3")[0].style.left="6200px";
    document.getElementsByClassName("stad4")[0].style.left="8400px";
    document.getElementsByClassName("stad5")[0].style.right="1350px";
}
var answer, quesLeft, imgSrc, qno, skipsLeft, hint;
var scoreUpdate = document.getElementById('score');
var userName = document.getElementById('username');
(function($)
 {
        $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
        {
        height: 'auto',
            width: 'auto',
// optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function(percent)
        {  
//optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
              console.log(percent);
            for(i=0;i<5;i++)
            {
                if (percent>left[i]&&percent<right[i]) 
                {
                    if (av[i]==1)
                            document.getElementById("Available"+String(i+1)).style.display='block';
                        else 
                        document.getElementById("NotAvailable"+String(i+1)).style.display='block';
                    
                        } 
            else
            {
                document.getElementById("Available"+String(i+1)).style.display='none';
                document.getElementById("NotAvailable"+String(i+1)).style.display='none';
                }   
            }
            var wide = Math.floor(percent * 100);
            var progress = wide + '%';
            document.getElementById('progressDone').style.width=progress;
        }
        });
}(jQuery));
    function dismissDiv(x) 
    {
    for(i=0;i<5;i++)
        {
            document.getElementById('Quiz'+String(i+1)).style.display='none';
        }
        document.getElementById('instructionsDiv').style.display='none';
        document.getElementById('leaderboardDiv').style.display='none';
        enable_scroll();
        if(x!=0) {
            getCloseDivResponse(x);
        }
    }
    function displayQuiz(x) {
        document.getElementById('Quiz'+String(x+1)).style.display='block';
        document.getElementById('Available'+String(x+1)).style.display='none';
        disable_scroll();
        document.getElementsByClassName('requestStatus')[x].innerHTML = "";
        imgSrc = document.getElementsByClassName('questionImg')[x];
        skipsLeft = document.getElementsByClassName('skipsLeft')[x];
        hint = document.getElementsByClassName('hintText')[x];
        getInitialQuestions(x+1);
    }
    function dismissPopUp(a) {
        document.getElementById('Available'+String(a+1)).style.display='none';
        document.getElementById('NotAvailable'+String(a+1)).style.display='none';
    }
    function openInstructions() {
    dismissDiv();
    document.getElementById('instructionsDiv').style.display='block';
    disable_scroll();
    }
    function displayLeaderboard() {
    dismissDiv();
    disable_scroll();
    getLeaderboard();
    document.getElementById('leaderboardDiv').style.display='block';
    }
   
function disable_scroll(){
    document.getElementsByTagName("body")[0].style.overflowY="hidden";
}

function enable_scroll(){
    document.getElementsByTagName("body")[0].style.overflowY="visible";
}

window.onbeforeunload= function()
{
    window.scrollTo(0,0);
}
$(document).ready(function() {
    disable_scroll();
})
function submitSol(x) {
    answer = document.getElementsByClassName('answer-field')[x-1].value;
    qno = document.getElementsByClassName('qno')[x-1];
    imgSrc = document.getElementsByClassName('questionImg')[x-1];
    hint = document.getElementsByClassName('hintText')[x-1];
    getAnsResponse(answer,qno,x);
}
function skipQues(x) {
    if (skipsLeft.innerHTML == "0") {
        document.getElementsByClassName('requestStatus')[x-1].innerHTML = "<strong>Sorry!!</strong> No skips left";
    } else {
        qno = document.getElementsByClassName('qno')[x-1];
        imgSrc = document.getElementsByClassName('questionImg')[x-1];
        hint = document.getElementsByClassName('hintText')[x-1];
        getSkipResponse(qno,x);
    }
}

// --------------AJAX Code after this------------

function getInitialQuestions(current) { //Invoked when first time any Stadium div is opened.
    $.ajax({
        url : "http://127.0.0.1:8000/accounts/profile/"+current+"/",
        type: "GET",
        data: {'number':current},
        dataType: 'json',
        beforeSend : function() {       
            document.getElementsByClassName('requestStatus')[current-1].innerHTML = "Loading Question...";     
        },
        // handle a successful response
        success : function(jsondata) {
            var objRecieved = jQuery.parseJSON(JSON.stringify(jsondata));
            skipsLeft.innerHTML = objRecieved.skip;
            scoreUpdate.innerHTML = objRecieved.score;
            quesLeft = objRecieved.djangoNoofQuestionsLeft;
            if(quesLeft<=0) {
                av[current-1] = 0;
                dismissDiv(0);
            } else {
                //Update Img
                imgSrc.src = objRecieved.djangoImage;
                document.getElementsByClassName('qno')[current-1].innerHTML = objRecieved.qsno;
                hint.innerHTML = objRecieved.hinttext;
            }
        },
        // handle a non-successful response
        error : function() {
            console.log("Error"); // provide a bit more info about the error to the console
        },
        complete : function() {    
            document.getElementsByClassName('requestStatus')[current-1].innerHTML = "";
        }
    });
}
function getAnsResponse(answer, qno, current) { //Question no. Answer is passed. Check Answer and return.
    var url1="http://127.0.0.1:8000/accounts/profile/"+current+"/answer/";
    $.ajax({
        url : url1,
        type: "GET",
        data: {'answerof':answer,'number':current},
        dataType: 'json',
        beforeSend : function() {       
            document.getElementsByClassName('requestStatus')[current-1].innerHTML = "Loading Question...";     
        },
        // handle a successful response
        success : function(jsondata) {
            var objRecieved = jQuery.parseJSON(JSON.stringify(jsondata));
            skipsLeft.innerHTML = objRecieved.skip;
            scoreUpdate.innerHTML = objRecieved.score;
            quesLeft = objRecieved.djangoNoofQuestionsLeft;
            if(quesLeft<=0) {
                av[current-1] = 0;
                dismissDiv(0);
            } else {
                //Update Img
                imgSrc.src = objRecieved.djangoImage;
                qno.innerHTML= objRecieved.qsno;
                hint.innerHTML = objRecieved.hinttext;
            }
        },
        // handle a non-successful response
        error : function() {
            console.log("Error"); // provide a bit more info about the error to the console
        },
        complete : function() {    
            document.getElementsByClassName('requestStatus')[current-1].innerHTML = "";
        }
    });
}
function getSkipResponse(qno, current) { //Question Number attempted passed when skip is clicked. Deduct 25 points.
    $.ajax({
        url : "http://127.0.0.1:8000/accounts/profile/"+current+"/skip/",
        type: "GET",
        data: {'number':current},
        dataType: 'json',
        beforeSend : function() {       
            document.getElementsByClassName('requestStatus')[current-1].innerHTML = "Loading Question...";     
        },
        // handle a successful response
        success : function(jsondata) {
            var objRecieved = jQuery.parseJSON(JSON.stringify(jsondata));
            skipsLeft.innerHTML = objRecieved.skip;
            scoreUpdate.innerHTML = objRecieved.score;
            quesLeft = objRecieved.djangoNoofQuestionsLeft;
            if(quesLeft<=0) {
                av[current-1] = 0;
                dismissDiv(0);
            } else {
                //Update Img
                imgSrc.src = objRecieved.djangoImage;
                qno.innerHTML = objRecieved.qsno;
                hint.innerHTML = objRecieved.hinttext;
            }
        },
        // handle a non-successful response
        error : function() {
            console.log("Error"); // provide a bit more info about the error to the console
        },
        complete : function() {    
            document.getElementsByClassName('requestStatus')[current-1].innerHTML = "";
        }
    });
}
function getCloseDivResponse (current) {
 //Stadium number is passed when Leave Stadium is clicked deduct 50 points
    $.ajax({
        url : "http://127.0.0.1:8000/accounts/profile/"+current+"/leave/",
        type: "GET",
        //data: {'number':current},
        //dataType: 'json',
        // handle a successful response
        success : function(jsondata) {
            var objRecieved = jQuery.parseJSON(JSON.stringify(jsondata));
            scoreUpdate.innerHTML = objRecieved.score;
        },
        // handle a non-successful response
        error : function() {
            console.log("Error"); // provide a bit more info about the error to the console
        }
    });
}
function getLeaderboard() {
    $.ajax({
        url : "http://127.0.0.1:8000/accounts/profile/leaderboard/",
        type : "GET",
        beforeSend : function() {
            document.getElementById('position').innerHTML = "Please Wait...";
            for (var i = 0; i < 10; ++i) {
                document.getElementsByClassName('name')[i].innerHTML = "Please Wait...";
            }
        },
        success : function(jsondata) {
            var objRecieved = jQuery.parseJSON(JSON.stringify(jsondata));
            for (var i = 0; i < 10; ++i) {
                document.getElementsByClassName('name')[i].innerHTML = objRecieved.username[i]; //Get Array of Username's here
                document.getElementsByClassName('score')[i].innerHTML = objRecieved.score[i]; //Get Array of Score's here
            }
            document.getElementById('position').innerHTML = objRecieved.rank;
        },
        error : function() {
            console.log("Error");
        }
    })
}

