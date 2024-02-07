
    console.log(document.querySelectorAll(".drum").length)
    for(var i=0;i<document.querySelectorAll(".drum").length;i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",function()
        {
        var buttonInnerHTML=this.innerHTML;
        makeSound(buttonInnerHTML);
        drumAnimation(buttonInnerHTML)
        })

    }
    document.addEventListener("keypress",function(event)
    {
        console.log(event);
       makeSound(event.key);
       drumAnimation(event.key)
    })
  
            function makeSound(key)
            {
    
                if(key=='w')
                {
                var audio=new Audio("sounds/tom-1.mp3");
                audio.play();
                }
                else if(key=='a')
                {
                var audio=new Audio("sounds/tom-2.mp3");
                audio.play();
                }
                else if(key=='s')
                {
                var audio=new Audio("sounds/tom-3.mp3");
                audio.play();
                }
                else if(key=='d')
                { var audio=new Audio("sounds/tom-4.mp3");
                audio.play();
                }
                else if(key=='j')
                {
                var audio=new Audio("sounds/snare.mp3");
                audio.play();
                }
                else if(key=='k')
                {
                var audio=new Audio("sounds/crash.mp3");
                audio.play();
                }
               else
                {
                var audio=new Audio("sounds/kick-bass.mp3");
                audio.play();
                }
            }
            function drumAnimation(currentkey)
            {

                var activeButton =document.querySelector("." + currentkey);
                activeButton.classList.add("pressed");
                setTimeout(function()
                {
                    activeButton.classList.remove("pressed");
                },100);
            } 
         