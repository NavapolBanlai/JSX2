export default class BMI {
  calculate(wg,hg,rg){
    return wg/(hg**2);
  }
  k(bmi,type){
    if(type == 'asian'){
      if(bmi<=18.5){
        return "Under weight";
      }
      else if(bmi>18.5 & bmi <=24.9)
      {
        return "Normal weight";
      }
      else if(bmi>24.9 & bmi <=29.9)
      {
        return "Overweight";
      }
      else{
        return "Obesity";
      }
    }
    else{
      if(bmi<=19.5){
        return "Under weight";
      }
      else if(bmi>19.5 & bmi <=34.9)
      {
        return "Normal weight";
      }
      else if(bmi>34.9 & bmi <=39.9)
      {
        return "Overweight";
      }
      else{
        return "Obesity";
      }
    }
  }
}