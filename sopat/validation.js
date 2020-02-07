var note;
note =0;
function valider()
{
    do
    {
       if ( document.getElementsByName("compteur")[0].checked== true && document.getElementsByName("compteur")[1].checked == false)
       {
        note =5;
    }
     else if (   document.getElementsByName("compteur")[1].checked== true && document.getElementsByName("compteur")[0].checked == false )
     {
        note =5;
    }
     else if (  document.getElementsByName("compteur")[0].checked == true && document.getElementsByName("compteur")[1].checked == true ) 
     {
        note =10;
    }

    }
    while (document.getElementsByName("compteur")[0].checked== false && document.getElementsByName("compteur")[1].checked == false )
  alert ("votre note de cette pv est "+ note);
}