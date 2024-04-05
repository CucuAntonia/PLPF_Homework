const grade = 50 + Math.random()*50.0;
console.log(grade, letterGrade(grade));
function letterGrade(grade)
{
    
    switch(true)
    {
        case ((grade >= 90) && (grade <= 100)):
            {
                return "A";
                break;
            }
        
        case ((grade >= 80) && (grade < 90)):
            {
                return "B";
                break;
            }
           
        case ((grade >= 70) && (grade < 80)):
            {
                return "C";
                break;
            }
             
        case ((grade >= 60) && (grade < 70)):
            {
                return "D";
                break;
            }
            
        case (grade < 60):
            {
                return "F";
                break;
            }
    }
}






