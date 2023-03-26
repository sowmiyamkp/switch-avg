
var avg=parseInt(prompt("Enter the number"));

switch(avg<=100)
{
	case avg>=90&&avg<=100:
		document.write("s grade");
		break;
	case avg>=89&&avg<=70:
	    document.write(" A grade");
		break;
	case avg>=61&&avg<=50:
	  document.write("B grade");
	  break;
	 case avg>=40&&avg<=49:
	   document.write("Pass");
	    break;
	default:
	   document.write("Fail");
    }
	
	
	